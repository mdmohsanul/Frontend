import React, { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import TodoContext from "./Contexts/TodoContext";
import TodoList from "./TodoList";
import Todo_Form from "./Todo_Form";

const Todo = () => {
  const { editTodo } = useContext(TodoContext);

  return (
    <>
      <div className="w-full min-h-screen bg-teal-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-4xl py-6 ">TODO APP</h1>
          {editTodo ? <Todo_Form existingTodo={editTodo} /> : <Todo_Form />}
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default Todo;
