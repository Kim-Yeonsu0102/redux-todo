/*eslint-disable*/
import React from 'react';
import { addTodo, checkedTodo, deleteTodo } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import  {nanoid}  from "nanoid";

function TodoBody(props) {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  let { id, contents, isCheck, isDone } = state.todo
  isCheck = !isCheck
  isDone = !isDone
  id={nanoid}
  return (

    <>
     {
        state.todo.map((item,i) => 
          <li key={item.id}>
            <input type="checkbox" onChange={() => {
              dispatch(checkedTodo({isCheck }))
            }} />

            {contents}

            <button type="button" onClick={() => {
              dispatch(deleteTodo({ isDone }))
            }}>삭제</button>

          </li>
          )}
     
    </>
  )
}



export default TodoBody;