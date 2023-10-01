import {createAsyncThunk} from "@reduxjs/toolkit";
import {promtApi} from "6-entities/promts";
import {getPromtsThunk} from "./getPromts";
import {getDiscordMessagesThunk} from "../../discordMessages";

export const dislikePromtThunk = createAsyncThunk<void, number, { state: RootState }>(
	'promts/dislikePromt',
	async (id, {dispatch, rejectWithValue }) => {
		try {
			await promtApi.dislikePromt(id)
		  dispatch(getPromtsThunk())
			dispatch(getDiscordMessagesThunk())
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

