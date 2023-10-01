import {createSlice} from '@reduxjs/toolkit'
import {IPromt} from "./types";

interface IAuthSlice {
	promt: IPromt | null,
	all_count: number | null
	with_image_count: number | null
}

const initialState: IAuthSlice = {
	promt: null,
	all_count: null,
	with_image_count: null
}

export const promtSlice = createSlice({
	name: 'promt',
	initialState,
	reducers: {
		setPromt: (state, action) => {
			state.promt = action.payload;
		},
		setPromtsAllCount: (state, action) => {
			state.all_count = action.payload;
		},
		setPromtsWithImageCount: (state, action) => {
			state.with_image_count = action.payload;
		},
	},
})

export const { setPromt, setPromtsAllCount, setPromtsWithImageCount } = promtSlice.actions;

export const selectPromt = (state: RootState):IPromt => state.promt.promt
export const selectPromtsAllCount = (state: RootState):number => state.promt.all_count
export const selectPromtsWithImageCount = (state: RootState):number => state.promt.with_image_count
