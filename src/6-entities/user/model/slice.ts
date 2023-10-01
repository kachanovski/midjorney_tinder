import {createSlice} from '@reduxjs/toolkit'

import {IUser} from "./types";

interface IUserSlice {
  isAuth: boolean
  uploadLimit: number
  user: IUser | null
}

const initialState: IUserSlice = {
  isAuth: false,
  uploadLimit: 1000,
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUploadLimit: (state, action) => {
      state.uploadLimit = action.payload;
    },
  },
})

export const { setIsAuth, setUser, setUploadLimit } = userSlice.actions;

export const selectIsAuth = (state: RootState):boolean => state.user.isAuth
export const selectUser = (state: RootState):IUser => state.user.user
export const selectUploadLimit = (state: RootState):number => state.user.uploadLimit
