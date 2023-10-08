import {instance, IResponse} from '7-shared/api'

import {IPromt} from "../model/types";
import {RequestSetPromtsBody, RequestPromtsBody} from "./types";

export const promtApi = {
    getPropmt(): Promise<IResponse<RequestPromtsBody>> {
        return instance.get('/promt')
    },
    setPromts(data: Omit<IPromt, 'id'>[]): Promise<IResponse<RequestSetPromtsBody>>  {
        return instance.post('/set-promts', data)
    },
    likePromt(id: number) {
        return instance.put(`/promt/like/${id}`)
    },
    dislikePromt(id: number) {
        return instance.delete(`/promt/dislike/${id}`)
    },
    deletePromt(value: string) {
        return instance.post(`/promt/delete`, {data: value})
    },
}
