import {ILoginForm, setIsAuth} from "6-entities/auth";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk<void, ILoginForm, { state: RootState }>(
	'auth/login',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			if(data.email === 'kachanovski03@gmail.com' && data.password === '12341234'){
				dispatch(setIsAuth(true))
			} else {
				dispatch(setIsAuth(false))
			}
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
