import {createAsyncThunk} from "@reduxjs/toolkit";
import {notifications} from "@mantine/notifications";

import {discordApi} from "6-entities/discord";
import {setUploadLimit} from "6-entities/user";
import {IPromt, promtApi} from "6-entities/promts";
import {UploadLimit} from "7-shared/lib/uploadLimit";
import {JWTToken} from "7-shared/lib/jwtToken";

import {messageContentSlicer} from "./messageContentSlicer";
import {getDefaultChanelId} from "./getDefaultChanelId";

export const getDiscordMessagesThunk = createAsyncThunk<void, {id?: string} | void , { state: RootState }>(
	'promt/messages',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const limit = UploadLimit.getCurrentValue().limit

			if(limit <=0 ){
				notifications.show({
					color: 'red',
					title: 'Лимит исчерпан',
					message: 'Лимит загрузки сообщений: 1000',
				})
				return rejectWithValue('error');
			}

			const chanelId = getDefaultChanelId()
			const message = await discordApi.getMessagesFromChanel(data?.id || chanelId)

			const promt: Omit<IPromt, 'id'>[] = message.data.map(i => ({
				discord_id: i.id,
				value: messageContentSlicer(i.content),
				image: null
			}))
				.filter(i => i)
				.filter(i => !i?.value?.includes('http'))
				.filter(i => !i?.value?.includes('--video'))
				.filter(i => !i?.value?.includes('https'))
				.filter(i => !i?.value?.includes('5.2'))
				.slice(0, 50)

			const res = await promtApi.setPromts(promt)
			if(Number(res.data.upload_count)){
				UploadLimit.updateUploadLimit(Number(res.data.upload_count))
				dispatch(setUploadLimit(limit - Number(res.data.upload_count)))
			}

		} catch (error: any) {
			const status = error?.response?.request?.status
			if(status){
				JWTToken.removeTokenDiscord()
				notifications.show({
					color: 'red',
					title: 'Токен протух',
					message: 'Необходимо заменить токен авторизации для Discord',
				})
			}
			return rejectWithValue(error);
		}
	}
);
