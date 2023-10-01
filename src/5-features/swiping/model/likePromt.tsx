import {createAsyncThunk} from "@reduxjs/toolkit";
import {promtApi} from "6-entities/promts";
import {getPromtsThunk} from "./getPromts";
import {getDiscordMessagesThunk} from "../../discordMessages";

export const likePromtThunk = createAsyncThunk<void, number, { state: RootState }>(
	'promts/likePromt',
	async (id, {dispatch, rejectWithValue }) => {
		try {
			await promtApi.likePromt(id)
		  dispatch(getPromtsThunk())
			dispatch(getDiscordMessagesThunk())
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

