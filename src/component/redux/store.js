import { configureStore } from '@reduxjs/toolkit'
import { todoReducers } from './slice'

export default configureStore({
  reducer: {
    todoParam: todoReducers
  }
})
