import { create } from 'zustand'
import { DetailMenuResponse } from "@/interface/detailMenu";


// default value
const initStore = {
    recipes: {
        data: [],
        loading: false,
        error: null,
    },
    fetchRecipes: {
        data: [],
        loading: false,
        error: null,
    }
}

type listMenuType = {
    data: DetailMenuResponse[],
    loading: boolean,
    error: null | string,
}

type UseListMenuStoreType = {
    recipes: listMenuType
    fetchRecipes: listMenuType
    setListMenu: (value: listMenuType) => void,
    setFetchListMenu: (value: listMenuType) => void,
    clearRecipes: () => void
}

export const useListMenuStore = create<UseListMenuStoreType>((set) => ({
    ...initStore,
    setListMenu: (value: listMenuType) => set({ recipes: value }),
    setFetchListMenu: (value: listMenuType) => set({ fetchRecipes: value }),
    clearRecipes: () => set({ ...initStore })
}))


