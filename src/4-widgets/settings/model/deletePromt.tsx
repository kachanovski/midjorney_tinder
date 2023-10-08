import {createAsyncThunk} from "@reduxjs/toolkit";
import {promtApi} from "6-entities/promts";
import {getPromtsThunk} from "../../../5-features/swiping";

export const deletePromtThunk = createAsyncThunk<void, string, { state: RootState }>(
	'promts/deletePromt',
	async (value, {dispatch, rejectWithValue }) => {
		try {
			await promtApi.deletePromt(value)
		  dispatch(getPromtsThunk())
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

