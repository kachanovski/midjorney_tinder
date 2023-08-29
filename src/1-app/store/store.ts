import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

import {rootReducer} from './rootReducer'

export function makeStore() {
  const store = configureStore({
    reducer: rootReducer
  })
  //TODO ?????
  setupListeners(store.dispatch)

  return store
}

export const store = makeStore()

// Infer the `RootState` and `AppDispatch` model.ts from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
