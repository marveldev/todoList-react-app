import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
  {
    name: 'todoParam',
    initialState: {
      param : 'all'
    },
    reducers: {
      filterParams: (state, action) => {
        state.param = action.payload
      }
    }
  }
)

const { actions: todoActions, reducer: todoReducers } = todoSlice
export { todoActions, todoReducers}
