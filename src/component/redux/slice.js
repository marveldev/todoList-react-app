import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
  {
    name: 'todoParam',
    initialState: {
      filter : 'all',
      theme: localStorage.getItem('theme') || 'light',
      toastParam: {isOpen: false, message: ''}
    },
    reducers: {
      setFilterParam: (state, action) => {
        state.filter = action.payload
      },
      setThemeParam: (state, action) => {
        state.theme = action.payload
        localStorage.setItem('theme', action.payload)
      },
      setToastParam: (state, action) => {
        state.toastParam = action.payload
      }
    }
  }
)

const { actions: todoActions, reducer: todoReducers } = todoSlice
export { todoActions, todoReducers}
