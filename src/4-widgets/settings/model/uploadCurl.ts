import {createAsyncThunk} from "@reduxjs/toolkit";
import {notifications} from "@mantine/notifications";

import {userApi} from "6-entities/user";

export const uploadFileThunk = createAsyncThunk<void, FormData, { state: RootState }>(
	'discord/curl',
	async (data, {dispatch, rejectWithValue }) => {
		try {
			await userApi.uploadDiscordCurl(data)
			notifications.show({
				color: 'green',
				title: 'Успешно',
				message: 'Файл заменен',
			})
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
