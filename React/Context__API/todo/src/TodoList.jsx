import { useContext, useState } from "react";
import TodoContext from "./Contexts/TodoContext";
import Todo_Form from "./Todo_Form";

const TodoList = () => {
  const { addHandler, deleteHandler, setEditTodo } = useContext(TodoContext);
  const { todoList } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);

  if (todoList.length === 0)
    return (
      <p className="flex items-center justify-center text-3xl mt-7">
        Todo List is empty
      </p>
    );

  return (
    <>
      <div className="flex items-center  mt-7 w-full">
        <table className="border-collapse border border-gray-300 w-5xl ">
          <thead className="h-14 text-xl font-medium">
            <tr>
              <th className="border border-gray-300 ...">Todo Item</th>
              <th className="border border-gray-300 ...">Todo Description</th>
              <th className="border border-gray-300 ...">Created At</th>
              <th className="border border-gray-300 ...">Actions</th>
            </tr>
          </thead>
          {todoList?.map((item) => (
            <tbody className="h-16 " key={item.id}>
              <tr className="py-2 px-4">
                <td className="border border-gray-300 px-4 w-96">
                  {item.item}
                </td>
                <td className="border border-gray-300 px-4 w-2xl">
                  {item.description}
                </td>
                <td className="border border-gray-300 px-4 w-96">
                  <p>{item.currDate}</p>
                  <p>{item.currTime}</p>
                </td>
                <td className="border border-gray-300 px-4 w-md ">
                  <button
                    className="bg-green-500 text-white py-1 px-4 rounded-md mr-7"
                    onClick={() => setEditTodo(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-4 rounded-md"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default TodoList;
