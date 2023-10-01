import {instance, type IResponse} from '7-shared/api'
import {RequestLoginBody, RequestMeBody} from "./types";
import {ILoginForm} from "../model/types";

export const userApi = {
  login(data: ILoginForm): Promise<IResponse<RequestLoginBody>> {
    return instance.post('/login', data)
  },
  getMe(): Promise<IResponse<RequestMeBody>> {
    return instance.get('/me')
  },
  uploadDiscordCurl(data: FormData): Promise<IResponse<RequestMeBody>> {
    return instance.post('/discord/upload', data)
  },
  startGenerate() {
    return instance.put('/start/generate')
  },
  stopGenerate() {
    return instance.put('/stop/generate')
  }
}
