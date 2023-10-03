import {createAsyncThunk} from "@reduxjs/toolkit";

import {getMeThunk} from "2-layouts/initLayout/model/getMe";
import {ILoginForm, setAuthError, userApi} from "6-entities/user";
import {JWTToken} from "7-shared/lib/jwtToken";
import {UploadLimit} from "7-shared/lib/uploadLimit";

export const loginThunk = createAsyncThunk<void, ILoginForm, { state: RootState }>(
	'auth/login',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const user = await userApi.login(data)
			JWTToken.setAccess(user.data.access_token)
			UploadLimit.setUploadLimit({
				limit: 1000,
				time: new Date().getTime()
			})
			dispatch(getMeThunk())
		} catch (error: any) {
			if(error?.response?.data?.message){
				dispatch(setAuthError('Некорректные данные'))
			}
			return rejectWithValue(error);
		}
	}
);
