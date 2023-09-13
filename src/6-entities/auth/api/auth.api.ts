import {instance, type IResponse} from '7-shared/api'
import {RequestLoginBody} from "./types";
import {ILoginForm} from "../model/types";

export const authApi = {
  login(data: ILoginForm): Promise<IResponse<RequestLoginBody>> {
    return instance.post('/login', data)
  }
}
