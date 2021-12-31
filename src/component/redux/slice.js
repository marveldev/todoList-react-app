import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
  {
    name: 'todoParam',
    initialState: {
      filter : 'all',
      theme: localStorage.getItem('theme') || 'light'
    },
    reducers: {
      setFilterParam: (state, action) => {
        state.filter = action.payload
      },
      setThemeParam: (state, action) => {
        state.theme = action.payload
        localStorage.setItem('theme', action.payload)
      }
    }
  }
)

const { actions: todoActions, reducer: todoReducers } = todoSlice
export { todoActions, todoReducers}
