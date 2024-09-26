import { create } from 'zustand'
import { IdndDetailResponse } from '@/interface/dndDetail'

const initStore = {
    dnd: {
        data: [],
        loading: false,
        isBatchSuccess: false,
        error: null,
    },
    fetchDnd: {
        data: [],
        loading: false,
        isBatchSuccess: false,
        error: null,
    }
}

type dndtype = {
    data: IdndDetailResponse[],
    loading: boolean,
    isBatchSuccess?: boolean,
    error: null | any,
}

type useDndListStoretype = {
    dnd: dndtype,
    fetchDnd: dndtype,
    setDndList: (value: dndtype) => void,
    setfetchDndList: (value: dndtype) => void,
    setBatchSuccess: (value: boolean) => void,
    clearDnd: () => void,
}

export const useDndListStore = create<useDndListStoretype>((set) => ({
    ...initStore,
    setDndList: (newValue: dndtype) => set((state) => ({
        ...state,
        dnd: {
            ...newValue,
            data:[...state.dnd.data, ...newValue.data],
        },
    })),
    setfetchDndList: (newValue: dndtype) => set((state) => ({
        ...state,
        fetchDnd: {
            ...newValue,
            data:[...state.fetchDnd.data, ...newValue.data],
        },
    })),
    setBatchSuccess: (newValue: boolean) => set((state)=>({
        ...state,
        fetchDnd: {
            ...state.fetchDnd,
            isBatchSuccess: newValue,
        },
        dnd: {
            ...state.dnd,
            isBatchSuccess: newValue,
        },
    })),
    clearDnd: () => set({ ...initStore }),
}))
