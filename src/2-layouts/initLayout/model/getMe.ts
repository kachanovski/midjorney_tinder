import {createAsyncThunk} from "@reduxjs/toolkit";

import {userApi, setIsAuth, setUser, setUploadLimit} from "6-entities/user";
import {JWTToken} from "7-shared/lib/jwtToken";
import {getUploadLimit} from "./getUploadLimit";

export const getMeThunk = createAsyncThunk<void, void, { state: RootState }>(
	'user/getMe',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const access_token = JWTToken.getAccess()
			if(access_token){
				const res = await userApi.getMe()
				const limit = getUploadLimit()
				dispatch(setUploadLimit(limit))
				dispatch(setUser(res.data))
				dispatch(setIsAuth(true))
			}
		} catch (error) {
			dispatch(setUser(null))
			dispatch(setIsAuth(false))
			return rejectWithValue(error);
		}
	}
);
