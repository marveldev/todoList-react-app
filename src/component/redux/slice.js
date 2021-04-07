import { createSlice } from '@reduxjs/toolkit'

// the createSlice() expects an objects(s) as its arguments.
// the name is the name of the slice.
// initialState is the initial of the state store, it also expects object.
// reducers is like the action house of the app, that modifies the state.
// more than one function can be added to the reducer.

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
