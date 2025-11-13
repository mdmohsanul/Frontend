import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const TodoContext = createContext();

export default TodoContext;

export const TodoProvider = ({ children }) => {
  const storedItems = JSON.parse(localStorage.getItem("todos")) || [];
  const [todoList, setTodoList] = useState(storedItems);

  const addHandler = (data) => {
    setTodoList((prev) => [...prev, data]);
    // setTodoList([...todoList, data]);
  };
  const deleteHandler = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };
  const [editTodo, setEditTodo] = useState(null);
  console.log(todoList);
  const updateHandler = (data) => {
    console.log("update ", data);
    console.log(todoList);
    const index = todoList.findIndex((s) => s.id === data.id);
    console.log(index);
    if (index !== -1) {
      setTodoList((prev) => [(prev[index] = data)]);
    }
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList, setTodoList]);
  return (
    <>
      <TodoContext.Provider
        value={{
          todoList,
          addHandler,
          deleteHandler,
          setEditTodo,
          editTodo,
          updateHandler,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};
