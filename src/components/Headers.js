/*eslint-disable*/
import React, { useState } from 'react';
import { addTodo, checkedTodo, deleteTodo } from '../store'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "nanoid";
import TodoBody from './TodoBody';




function Headers(props) {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  let { id, contents, isCheck, isDone } = state.todo
  const [texts, setTexts] = useState('')

  contents = texts
  id = nanoid()
  return (

    <div>
      
      <input type="text" placeholder='좀 되라' value={texts} onChange={(e) =>
     { 
        state.contents = setTexts(e.target.value)}}
      />
      <button type="submit" onClick={() => {
        console.log(texts)
        dispatch(addTodo({contents: texts}))
      }}>추가</button>

<ul>
  <TodoBody/>
</ul>


    </div>
  );
}

export default Headers;