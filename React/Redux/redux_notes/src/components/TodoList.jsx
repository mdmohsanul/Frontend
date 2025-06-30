import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);
  //  console.log(todo.todos);
  return (
    <>
      <h1>Todos</h1>
      {todo.todos.map((item) => (
        <li key={item.id}>
          {item.text}{" "}
          <button onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default TodoList;
