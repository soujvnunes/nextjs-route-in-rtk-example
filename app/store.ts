import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import api from './api'
import state from './state'

export default function initStore() {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      [state.reducerPath]: state.reducer,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(api.middleware)
    },
  })
}

export type AppStore = ReturnType<typeof initStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

setupListeners(initStore().dispatch)
