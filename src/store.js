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
		},
		checkTodo: (state, action) => {
			console.log(action.payload);
			const { id } = action.payload;
			const findTodo = state.find((todo) => todo.id === id);
			findTodo.isCheck = !findTodo.isCheck;
		},
	},
});

export let { addTodo, checkTodo, deleteTodo } = todo.actions;

export default configureStore({
	reducer: {
		todo: todo.reducer,
	},
});
