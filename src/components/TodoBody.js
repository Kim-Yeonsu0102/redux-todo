/*eslint-disable*/
import React, { useEffect } from "react";
import { checkTodo, deleteTodo, setTodo } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import "./../App.css";

function TodoBody(props) {
	const { todo } = useSelector((state) => state); //state를 바꿔야 함...
	const dispatch = useDispatch();
	const onChangeHandler = (id) => dispatch(checkTodo(id));

	useEffect(() => {
		if (localStorage.getItem("todos")) {
			console.log(localStorage.getItem("todos"));
			const prevTodoListArr = JSON.parse(localStorage.getItem("todos"));
			// const todos = localStorage.getItem("todos", JSON.stringify(state));

			dispatch(setTodo(prevTodoListArr));
		}
	}, []);

	return (
		<div>
			{todo.map((item, i) => (
				<div key={item.id} className="todoBody">
					<div className="checkbox-wrapper-23">
						<input type="checkbox" id={item.id} onChange={(id) => onChangeHandler(item.id)} />
						<label htmlFor={item.id} style={{ width: "24px", height: "24px" }}>
							<svg viewBox="0,0,50,50">
								<path d="M5 30 L 20 45 L 45 5"></path>
							</svg>
						</label>
					</div>
					<span
						style={{
							color: item.isCheck ? "#ccc" : "black",
							fontSize: "26px",
							textDecoration: item.isCheck ? "line-through" : "",
						}}>
						{item.contents} {/* //여기가 문제임 ㅠㅠㅠㅠㅠ */}
					</span>

					{/* 체크박스를 누르면->체인지 이벤트가 발생하면 // 
							store의 todo.isCheck에 접근 -> dispatch(checkTodo())
							boolean 값을 변화시킴   */}

					<button type="button" onClick={() => dispatch(deleteTodo(item.id))}>
						삭제
					</button>
				</div>
			))}
		</div>
	);
}

export default TodoBody;
