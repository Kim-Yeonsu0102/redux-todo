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
			localStorage.removeItem("todos", JSON.stringify(state[findIdx]));

		
		},

		
	},
});

export const { addTodo, checkTodo, deleteTodo  } = todo.actions;

const prevSetTodo = createSlice({
	name: "prevSetTodo",
	initialState:[],
	reducers: {
		setTodo: (state, action) => {
			
		let prevList  = action.payload; //[ {id:~~ , contents:`~~` , isfalse:fdskljf } ]
			console.log("2", prevList)
		console.log("3", )
		// state = [{state},{...prevList}]
		
		
		},

	}
})

export const {setTodo} = prevSetTodo.actions





export default configureStore({
	reducer: {
		todo: todo.reducer,
		prevSetTodo : prevSetTodo.reducer,
	},
});
