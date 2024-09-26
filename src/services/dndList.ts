import axios from "axios"
import { DND_BASE_URL_API } from '@/utils/constant'
import { IdndListResponse } from '@/interface/dndList'
import { handleResponse, IResponse } from '@/utils/handleresponse'

interface IGetdndListResponse extends IResponse {
    status: number | undefined,
    data?: IdndListResponse,
}

export const dndListServices = {
    getdndList: async (): Promise<IGetdndListResponse> => {
        try {
            const response = await axios.get(`${DND_BASE_URL_API}/monsters`)
            return handleResponse.success(response)
        } catch (error: any) {

            return handleResponse.error(error)
        }




    }
}