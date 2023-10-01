import {createAsyncThunk} from "@reduxjs/toolkit";

import {userApi} from "6-entities/user";
import {getMeThunk} from "../../../2-layouts/initLayout/model/getMe";

export const startGenerateThunk = createAsyncThunk<void, void, { state: RootState }>(
	'promt/generate-start',
	async (_, {dispatch, rejectWithValue }) => {
		try {
			await userApi.startGenerate()
			await dispatch(getMeThunk())
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const stopGenerateThunk = createAsyncThunk<void, void, { state: RootState }>(
	'promt/generate-start',
	async (_, {dispatch, rejectWithValue }) => {
		try {
			await userApi.stopGenerate()
			await dispatch(getMeThunk())
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);


