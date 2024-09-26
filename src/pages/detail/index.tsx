import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dndDetailServices } from "@/services";

import { IdndDetailResponse } from "@/interface/dndDetail";

type dndtype = {
  data: IdndDetailResponse | undefined;
  loading: boolean;
  error: null | unknown;
};

const DetailPage = () => {
  const { index } = useParams();
  const [dnd, setDnd] = useState<dndtype>({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (index: string) => {
    const response = await dndDetailServices.getdndDetail(index);

    if (response.status === 200) {
      if (response.data) {
        if (response.data.image) {
          setDnd({
            data: {
              ...response.data,
              image: `https://www.dnd5eapi.co${response.data?.image}`,
            },
            loading: false,
            error: response.error,
          });
        } else {
          setDnd({
            data: { ...response.data, image: `/image/unknow.webp` },
            loading: false,
            error: response.error,
          });
        }
      }
    } else {
      setDnd({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };
  useEffect(() => {
    if (index) callData(index);
  }, [index]);

  return (
    <div className="m-[auto]">
      <div className=" ">
        <img src="/image/DnD.png" className="max-h-[120px] mt-[50px]" />
      </div>

      <div className="w-[90%] max-w-[600px] m-[auto]">
        {dnd.data && (
          <div className=" m-[auto]  overflow-hidden bg-[url('/image/olddetail.avif')]  rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700 p-[16px]">
            <div className=" bg-center aspect-square w-full bg-cover rounded-[20px] ">
              <div className="">
                <img
                  className="rounded-t-lg max-h-[400px] p-[40px] w-full"
                  src={dnd.data.image}
                  alt=""
                />
              </div>
            </div>
            <div className="py-5 ">
              <div className="flex justify-between">
                <h6 className="gap-x-6 mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                  {dnd.data.name}
                </h6>
                <h6 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                  {dnd.data.size}
                </h6>
              </div>
              <div className="flex flex-row justify-around">
                <div className="grid grid-rows-3 gap-x-3">
                  <div className="1">
                    <div className="flex w-[200px] justify-between">
                      <div className="text-xl font-bold">str:</div>
                      <div className="flex justify-end">
                        {dnd.data.strength}
                      </div>
                    </div>
                    <div className="flex w-[200px] justify-between">
                      <div className="text-xl font-bold">dex:</div>
                      <div className="flex justify-center">
                        {dnd.data.dexterity}
                      </div>
                    </div>
                  </div>
                  <div className="2">
                    <div className="flex w-[200px] justify-between">
                      <div className="text-xl font-bold">con:</div>
                      <div className="flex justify-center">
                        {dnd.data.constitution}
                      </div>
                    </div>
                    <div className="flex w-[200px] justify-between">
                      <div className="text-xl font-bold">int:</div>
                      <div className="flex justify-center">
                        {dnd.data.intelligence}
                      </div>
                    </div>
                  </div>
                  <div className="3">
                    <div className="flex w-[200px] justify-between">
                      <div className="text-xl font-bold">wis:</div>
                      <div className="flex justify-center">
                        {dnd.data.wisdom}
                      </div>
                    </div>
                    <div className="flex w-[200px] justify-between">
                      <div className="text-xl font-bold">char:</div>
                      <div className="flex justify-center">
                        {dnd.data.charisma}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="flex w-[200px] justify-between">
                    <div className="text-xl font-bold">hit points:</div>
                    <div className="flex justify-center">
                      {dnd.data.hit_points}
                    </div>
                  </div>
                  <div className="flex w-[200px] justify-between">
                    <div className="text-xl font-bold">xp:</div>
                    <div className="flex justify-center">{dnd.data.xp}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <span className="">{dnd.data.type}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
