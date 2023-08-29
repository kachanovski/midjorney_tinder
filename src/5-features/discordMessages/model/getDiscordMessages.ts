import {createAsyncThunk} from "@reduxjs/toolkit";

import {discordApi, setDiscordMessages} from "6-entities/discord";

export const getDiscordMessagesThunk = createAsyncThunk<void, void, { state: RootState }>(
	'discord/messages',
	async (_, {dispatch, rejectWithValue }) => {
		try {
			const message = await discordApi.getMessagesFromChanel('945077390839787570')
			dispatch(setDiscordMessages(message.data))
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
