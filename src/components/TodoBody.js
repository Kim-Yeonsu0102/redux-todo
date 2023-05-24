/*eslint-disable*/
import React from "react";
import { checkTodo, deleteTodo } from "../store";
import { useDispatch, useSelector } from "react-redux";
import "./../App.css";

function TodoBody(props) {
	const { todo } = useSelector((state) => state);
	const dispatch = useDispatch();
	const onChangeHandler = (id) => dispatch(checkTodo(id))

	return (
		<div >
			{todo.map((item, i) => (
				<div key={item.id} className="todoBody">
					<input id="check" type="checkbox" onChange={(id) => onChangeHandler(item.id)} />
							{/* 체크박스를 누르면->체인지 이벤트가 발생하면 // 
							store의 todo.isCheck에 접근 -> dispatch(checkTodo())
							boolean 값을 변화시킴   */}
					<span style={{ textDecorationLine: item.isCheck ? 'line-through' : 'none' }}>
						{item.contents}
					</span>

					<button type="button" onClick={() => dispatch(deleteTodo(item.id))}>
						삭제
					</button>
				</div>
			))}
		</div>
	);
}

export default TodoBody;
