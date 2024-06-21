import axios from "axios"
import { RECIPES_BASE_URL, API_KEY } from "@/utils/constant";
import { DetailMenuResponse } from "@/interface/detailMenu";

// type data DetailMenuResponse
interface GetDetailMenuResponse {
    status: number | undefined,
    data: DetailMenuResponse
}

export const DetailMenuServices = {
    getDetailMenu: async (id: number): Promise<GetDetailMenuResponse> => {
        const response = await axios.get(`${RECIPES_BASE_URL}/${id}/information?${API_KEY}`)


        return response

    }
}