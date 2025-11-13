import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "./Contexts/TodoContext";

const Todo_Form = ({ existingTodo = null }) => {
  console.log(existingTodo);
  const { addHandler, updateHandler } = useContext(TodoContext);
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const currentDate = new Date();

  function getData() {
    const data = {
      item,
      description,
      currDate: `${currentDate.getDate()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getFullYear()}`,
      currTime: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
      id: uuidv4(),
    };
    return data;
  }

  useEffect(() => {
    if (existingTodo) {
      setItem(existingTodo.item);
      setDescription(existingTodo.description);
    }
  }, [existingTodo]);
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = getData();

    addHandler(formData);
    setItem("");
    setDescription("");
  };

  const update = () => {
    const formData = {
      id: existingTodo.id,
      item,
      description,
      currDate: `${currentDate.getDate()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getFullYear()}`,
      currTime: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
    };

    updateHandler(formData);
    existingTodo = null;
    setItem("");
    setDescription("");
  };
  return (
    <>
      <div className="max-w-5xl mx-auto border border-amber-100 p-7">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="item" className=" pb-2 text-xl mr-2">
            {" "}
            Todo:
          </label>
          <input
            type="text"
            name="item"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="outline-1 outline-cyan-900 w-72 bg-white py-2 px-3 text-black mr-4"
          />

          <label htmlFor="item" className=" pb-2 text-xl mr-2">
            {" "}
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-1 outline-cyan-900  w-72 bg-white py-2 px-3 text-black"
          />
          {existingTodo ? (
            <button
              className="cursor-pointer py-2 px-5 bg-blue-300 text-gray-800 ml-3 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              onClick={update}
            >
              Update
            </button>
          ) : (
            <button
              className="cursor-pointer py-2 px-5 bg-blue-300 text-gray-800 ml-3 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              onClick={submitHandler}
            >
              Sumbit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Todo_Form;
