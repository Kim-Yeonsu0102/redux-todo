/*eslint-disable*/

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todo = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			// const items = action.payload; // {contents : 111}
			const { contents } = action.payload; //
			const newTodo = {
				id: nanoid(),
				contents: contents,
				isCheck: false,
				isDone: false,
			};
			state.unshift(newTodo);
			localStorage.setItem("todos", JSON.stringify(state));
		},
		checkTodo: (state, action) => {
			const id = action.payload;
			const findTodo = state.find((todo) => todo.id === id);
			findTodo.isCheck = !findTodo.isCheck;
		},
		deleteTodo: (state, action) => {
			const id = action.payload;
			const findIdx = state.findIndex((todo) => todo.id === id);
			state.splice(findIdx, 1);
		},

		setTodo: (state, action) => {
			
			const prevList  = action.payload; //[ {id:~~ , contents:`~~` , isfalse:fdskljf } } ]
		
			
			console.log("3",prevList)

			// state.push(prevList)
		
		},
	},
});

export const { addTodo, checkTodo, deleteTodo, setTodo } = todo.actions;

export default configureStore({
	reducer: {
		todo: todo.reducer,
	},
});
