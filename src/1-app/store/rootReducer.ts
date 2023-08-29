import { combineReducers } from '@reduxjs/toolkit'

import { authSlice } from '6-entities/auth'
import {discordSlice} from "6-entities/discord";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [discordSlice.name]: discordSlice.reducer,
})
