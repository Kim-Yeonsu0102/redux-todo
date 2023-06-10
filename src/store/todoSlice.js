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
			const { prevList } = action.payload; //[ {id:~~ , contents:`~~` , isfalse:fdskljf } } ]
			// {
			// 	prevList.map((t, i) => {
			// 		state.push({
			// 			//...얘네를 헤더에서 호출해줄 변수명이 필요한데...
			// 			id: prevList[i].id,
			// 			contents: prevList[i].content,
			// 			isCheck: prevList[i].isCheck,
			// 			isDone: prevList[i].isDone,
			// 		});
			// 	});
			// }
		},
	},
});

export const { addTodo, checkTodo, deleteTodo, setTodo } = todo.actions;

export default configureStore({
	reducer: {
		todo: todo.reducer,
	},
});
