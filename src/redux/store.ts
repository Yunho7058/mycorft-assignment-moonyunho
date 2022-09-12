import { configureStore } from '@reduxjs/toolkit'
import login from './slice/login'
import items from './slice/items'
const store = configureStore({
  reducer: { login, items },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
