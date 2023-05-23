/*eslint-disable*/
import React from "react";
import { addTodo, checkTodo, deleteTodo } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

function TodoBody(props) {
	const { todo } = useSelector((state) => state);
	const dispatch = useDispatch();

	console.log(todo);

	const onChangeHandler = (id) => {
		dispatch(checkTodo(id));
	};
	return (
		<>
			{todo.map((item, i) => (
				<li key={item.id}>
					<input
						type="checkbox"
						onChange={(id) => onChangeHandler(item.id)} // false -> a - true ->b- false -> s - false
					/>
					{/* 체크박스를 누르면->체인지 이벤트가 발생하면 // 
 store의 todo.isCheck에 접근 -> dispatch(checkTodo())
  boolean 값을 변화시킴   */}
					{item.contents}

					<button
						type="button"
						onClick={() => {
							dispatch(deleteTodo({ isDone }));
						}}>
						삭제
					</button>
				</li>
			))}
		</>
	);
}

export default TodoBody;
