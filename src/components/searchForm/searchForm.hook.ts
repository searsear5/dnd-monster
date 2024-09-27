import { useEffect, useRef } from 'react'
import { dndListServices, dndDetailServices } from '@/services'
import { useForm } from 'react-hook-form'
import { useDndListStore } from '@/store/dndList'
import { IdndDetailResponse } from '@/interface/dndDetail'


const useSearchForm = () => {

    const {
        register,
        watch,
    } = useForm();
    const hasFetched = useRef(false); // ใช้ useRef เพื่อเก็บสถานะการโหลดข้อมูล
    const { setfetchDndList, fetchDnd, setDndList, setBatchSuccess,clearDnd } = useDndListStore()

    const keyword = watch("keyword")
    const type = watch("type")
    const size = watch("size")

    const callData = async () => {
        setfetchDndList({
            data: [],
            loading: true,
            isBatchSuccess: false,
            error: null,
        });
        
        const responseList = await dndListServices.getdndList();
        
        if (responseList.status === 200) {
            const responseResults = responseList.data?.results || [];
            const batchSize = 10;
            const totalBatches = Math.ceil(responseResults.length / batchSize);
            
            for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {

                const batchResults = responseResults.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize);
                const promiseList = [];
                const dndList = [];
                
                for (const dnd of batchResults) {
                    promiseList.push(dndDetailServices.getdndDetail(dnd.index));
                }
                
                // ดึงข้อมูลแบบ batch
                const detailList = await Promise.all(promiseList);

                for (const response of detailList) {
                    const dndData = response.data;
                    
                    if (dndData) {
                        if (dndData.image) {
                            dndList.push({
                                ...dndData,
                                image: `https://www.dnd5eapi.co${dndData.image}`,
                            });
                        } else {
                            dndList.push({
                                ...dndData,
                                image: `/image/unknow.webp`,
                            });
                        }
                    }
                }
                
                // ทำการอัปเดตข้อมูลหลังจากเรียกข้อมูลแต่ละ batch เสร็จ
                setfetchDndList({
                    data: dndList,
                    loading: false, // loading จะแสดง false เมื่อ batch สุดท้ายเสร็จ
                    error: null,
                    isBatchSuccess: false,
                });
                setDndList({
                    data: dndList,
                    loading: false,
                    error: null,
                    isBatchSuccess: false,
                });
            }
            setBatchSuccess(true);
        } else {
            setfetchDndList({
                data: [],
                loading: false,
                error: responseList.error,
                isBatchSuccess: false,
            });
        }
    };
    

    const filterdnd = (
        dndList: IdndDetailResponse[],
        keyword: string,
        type: string,
        size: string,
    ) => {
        const keywordFilter = dndList.filter((item) => item.name.includes(keyword))
        const typeFilter = type !== "all types" ? keywordFilter.filter((item) => item.type.includes(type)) : keywordFilter
        const sizeFilter = size !== "all size" ? typeFilter.filter((item) => item.size.includes(size)) : typeFilter
        return sizeFilter
    }

    useEffect(() => {
        if (!hasFetched.current) {
            callData();
            hasFetched.current = true; // เปลี่ยนสถานะเป็น true เพื่อบล็อกการเรียกครั้งถัดไป
        }

        return () => {
            clearDnd();
        }
    }, [])

    useEffect(() => {
        const data = fetchDnd.data.filter((item) => item.name.includes(keyword))
        setDndList({
            data: data,
            loading: false,
            error: null,
        });

    }, [keyword])

    useEffect(() => {
        const data = filterdnd(fetchDnd.data, keyword, type, size)
        setDndList({
            data: data,
            loading: false,
            error: null,
        });

    }, [keyword, type, size])


    return {
        fieldKeyword: register("keyword"),
        fieldtype: register("type"),
        fieldsize: register("size"),
    }
}

export { useSearchForm }