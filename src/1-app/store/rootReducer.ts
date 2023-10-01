import { combineReducers } from '@reduxjs/toolkit'

import {promtSlice} from "6-entities/promts";
import {userSlice} from "6-entities/user";

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [promtSlice.name]: promtSlice.reducer,
})
