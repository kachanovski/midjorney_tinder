import {createAsyncThunk} from "@reduxjs/toolkit";

import {getMeThunk} from "2-layouts/initLayout/model/getMe";
import {JWTToken} from "7-shared/lib/jwtToken";

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
	'auth/logout',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			JWTToken.removeToken()
			dispatch(getMeThunk())
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
