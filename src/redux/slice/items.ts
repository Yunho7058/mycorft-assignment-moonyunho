import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import TypeList from '../../components/Global/TypeList'

const initialState: TypeList.ItemStatus = {
  status: '',
  items: {
    totalPages: 0,
    currentPage: 0,
    content: [],
  },
  item: null,
}

const itemsAPI = createAsyncThunk('itemsAPI', async (page: string) => {
  try {
    const data = await axios.get(
      `https://mycroft-test-api.herokuapp.com/order${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return data.data
  } catch (error) {
    console.log(error)
  }
})

const items = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(itemsAPI.pending, (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(itemsAPI.fulfilled, (state, action) => {
      state.status = 'complete'

      if (action.payload.totalPages) {
        state.items = action.payload
      } else {
        state.item = action.payload
      }
    })
    builder.addCase(itemsAPI.rejected, (state, action) => {
      state.status = 'fail'
    })
  },
})

export default items.reducer
export { itemsAPI }
