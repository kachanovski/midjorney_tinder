import {createAsyncThunk} from "@reduxjs/toolkit";
import {setIsAuth} from "6-entities/auth";
import {userApi} from "6-entities/user";
import {JWTToken} from "7-shared/lib/jwtToken";

export const getMeThunk = createAsyncThunk<void, void, { state: RootState }>(
	'user/getMe',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const access_token = JWTToken.getAccess()
			if(access_token){
				await userApi.getMe()
				dispatch(setIsAuth(true))
			}
		} catch (error) {
			dispatch(setIsAuth(false))
			return rejectWithValue(error);
		}
	}
);
