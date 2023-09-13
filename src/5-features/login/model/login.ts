import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginForm, setIsAuth, authApi} from "6-entities/auth";
import {JWTToken} from "../../../7-shared/lib/jwtToken";

export const loginThunk = createAsyncThunk<void, ILoginForm, { state: RootState }>(
	'auth/login',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const user = await authApi.login(data)
			JWTToken.setAccess(user.data.access_token)
			dispatch(setIsAuth(true))
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
