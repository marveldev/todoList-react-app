import { configureStore } from '@reduxjs/toolkit' // This is a redux store we import from RTK
import { todoReducers } from './slice'

// the configureStore is a property of RTK and expects an object as its argument.
// we can have various objects in the store, but only one configureStore.
// todoParam is the name to the createSlice(), where the todoReducers is gotten from.

export default configureStore({
  reducer: {
    todoParam: todoReducers
  }
})
