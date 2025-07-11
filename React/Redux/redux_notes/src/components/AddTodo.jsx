import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState("");
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(formData));
    setFormData("");
  };
  return (
    <>
      <form onSubmit={addHandler}>
        <input
          type="text"
          name=""
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
