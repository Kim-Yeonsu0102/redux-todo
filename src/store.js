/*eslint-disable*/
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const todo = createSlice({
  name: 'todo',
  initialState: [
  {
    id: nanoid(),
    contents: '',
    isCheck: false,
    isDone: false,
  }
],
  reducers: {
    addTodo : (state, action)=> {
      let items = action.payload

      todo.state = [...state, {
        id: items.id ,
        contents : items.contents ,
        isCheck: false,
        isDone: false,

      }]

  
      }
    ,
    checkedTodo : (state, action) =>{
      state.isCheck = !state.isCheck
      console.log(state.isCheck , !isCheck)
    },
    deleteTodo:(state, action) =>{
      console.log(action.payload)
    }
  }
})

export let { addTodo, checkedTodo, deleteTodo } = todo.actions

export default configureStore({
  reducer: {
    todo: todo.reducer,

  }
})