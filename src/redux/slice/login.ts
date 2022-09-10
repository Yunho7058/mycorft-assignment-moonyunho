import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import TypeList from '../../components/Global/TypeList'

// const localData = window.localStorage.getItem('isLogin');
const initialState: TypeList.LoginSlice = {
  status: '',
  isLogin: false,
  token: '',
}

const loginAPI = createAsyncThunk(
  'loginAPI',
  async (userInfo: { id: string; password: string }) => {
    try {
      console.log(userInfo)
      const data = await axios.post(
        'https://mycroft-test-api.herokuapp.com/login',
        userInfo,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      return data.data.token
    } catch (error: Error | AxiosError | any) {
      console.log(error.response.status)
    }
  },
)
//Authorization: `Bearer ${accessToken}`,
const login = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginAPI.pending, (state, action) => {
      state.status = 'Loading'
    })
    //요청 성공
    builder.addCase(loginAPI.fulfilled, (state, action) => {
      state.status = 'complete'
      state.isLogin = true
      state.token = action.payload
    })
    //요청 실패
    builder.addCase(loginAPI.rejected, (state, action) => {
      state.status = 'fail'
      console.log(action.payload)
    })
  },
})

// export const { successLoginLogout } = login.actions;
export { loginAPI }
export default login.reducer
