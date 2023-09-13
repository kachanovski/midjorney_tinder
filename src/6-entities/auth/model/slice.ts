import {createSlice} from '@reduxjs/toolkit'

interface IAuthSlice {
  isAuth: boolean
}

const initialState: IAuthSlice = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
})

export const { setIsAuth } = authSlice.actions;

export const selectIsAuth = (state: RootState):boolean => state.auth.isAuth
