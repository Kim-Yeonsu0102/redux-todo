/*eslint-disable*/

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todo = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			// const items = action.payload; // {contents : 111}
			const { contents } = action.payload;
			const newTodo = {
				id: nanoid(),
				contents,
				isCheck: false,
				isDone: false,
			};
			state.unshift(newTodo);
			state.map((a,i)=>{
				localStorage.setItem('todo'+[i],JSON.stringify(a))
			})
			

		},
		checkTodo: (state, action) => {
			const  id  = action.payload;
			const findTodo = state.find((todo) =>todo.id === id)
			findTodo.isCheck = !findTodo.isCheck;
		},
		deleteTodo: (state, action) => {		
			const id  = action.payload;
			const findIdx = state.findIndex((todo) =>todo.id === id)
			state.splice(findIdx,1)
		}
	},
});

export const { addTodo, checkTodo, deleteTodo } = todo.actions;

export default configureStore({
	reducer: {
		todo: todo.reducer,
	},
});
