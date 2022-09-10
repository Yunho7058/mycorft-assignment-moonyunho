import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import login from './slice/login'
const store = configureStore({
  reducer: { login },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
