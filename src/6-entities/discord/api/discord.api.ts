import {discordInstance, type IResponse} from '7-shared/api'
import {IDiscordMessage} from "../model/types";

export const discordApi = {
    getMessagesFromChanel(chanelId: string, limit= 100): Promise<IResponse<IDiscordMessage[]>> {
        return discordInstance.get(`/v9/channels/${chanelId}/messages?limit=${limit}`)
    }
}
