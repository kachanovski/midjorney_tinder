import {instance, type IResponse} from '7-shared/api'
import {RequestMeBody} from "./types";

export const userApi = {
  getMe(): Promise<IResponse<RequestMeBody>> {
    return instance.get('/me')
  },
}
