import axios from "axios"
import { RECIPES_BASE_URL, API_KEY } from "@/utils/constant";
import { ListMenuResponse } from "@/interface/listMenu";
import { handleResponse, IResponse } from "@/utils/handleResponse";

// type data ListMenuResponse
interface GetListMenuResponse extends IResponse {
    status: number | undefined,
    data?: ListMenuResponse
}

export const listMenuServices = {
    getListMenu: async ({ offset, number, type }: { offset?: number, number?: number, type?: string, query?: string }): Promise<GetListMenuResponse> => {
        try {
            const response = await axios.get(`${RECIPES_BASE_URL}/complexSearch?${API_KEY}&offset=${offset || 0}&number=${number || 100}`, {
                params: {
                    type: type,
                    query: type,
                },
            });
            return handleResponse.success(response)
        } catch (error: any) {
            return handleResponse.error(error)
        }
    },


};


