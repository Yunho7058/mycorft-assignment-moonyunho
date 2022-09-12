import { createSlice } from '@reduxjs/toolkit'
import TypeList from '../../components/Global/TypeList'

const initialState: TypeList.LoginState = {
  isLogin: false,
  token: '',
}

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin(state, action) {
      state = { isLogin: true, token: action.payload }
      return state
    },
    setLogout(state) {
      state = { ...initialState }
      return state
    },
  },
})

export const { setLogin, setLogout } = login.actions
export default login.reducer
