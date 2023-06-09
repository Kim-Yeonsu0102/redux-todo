/*eslint-disable*/
import { useEffect, useState } from "react";
import { addTodo, setTodo } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import "./../App.css";

function Headers(props) {
	const { todo } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	//1.  온클릭, 온체인지 핸들러 바깥으로 빼기
	// 폼타입 -> 액션이 일어날때마다 리셋 되기때문에 e.prevDefault (리셋 방지) 필요
	// 투두 바디는 필요 없음
	// 디스트럭쳐링 , 들어오는 값, 나가는 값이 뭔지 무슨형태인지 잘 파악하자 .
	//필요없는건 쓰지 말자!

	const onChangeHandler = (e) => {
		setText(e.target.value);
	};

	const onClickHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo({ contents: text }));
	};

	return (
		<div className="header">
			<form onSubmit={onClickHandler}>
				<input type="text" placeholder="좀 되라" value={text} onChange={onChangeHandler} />
				<button type="submit">추가</button>
			</form>
		</div>
	);
}

export default Headers;
