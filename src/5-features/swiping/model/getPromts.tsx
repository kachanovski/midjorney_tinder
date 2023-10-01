import {createAsyncThunk} from "@reduxjs/toolkit";
import {promtApi, setPromt, setPromtsAllCount, setPromtsWithImageCount} from "6-entities/promts";

export const getPromtsThunk = createAsyncThunk<void, void, { state: RootState }>(
	'promts/getPromts',
	async (_, {dispatch, rejectWithValue }) => {
		try {
			const res = await promtApi.getPropmt()
			dispatch(setPromt(res.data.data))
			dispatch(setPromtsWithImageCount(`${res.data.count}`))
			dispatch(setPromtsAllCount(`${res.data.all_count}`))
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
