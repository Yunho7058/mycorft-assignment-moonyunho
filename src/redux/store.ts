import { configureStore } from '@reduxjs/toolkit'
import login from './slice/login'
const store = configureStore({
  reducer: { login },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
