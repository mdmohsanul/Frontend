import React, { useContext,useEffect,useState } from 'react'
import TodoContext from './TodoContext'

const TodoForm = ({existedTodo = null}) => {
  const {addTodoHandler,editTodoHandler} = useContext(TodoContext)
    const [todoItem,setTodoItem] = useState(existedTodo?.todoItem || "")

    useEffect(() => {
      setTodoItem(existedTodo?.todoItem)
    },[existedTodo?.todoItem])
  const submitHandler = () => {
     const data = {
      id:Date.now(),
      todoItem:todoItem
     }
     addTodoHandler(data)
     setTodoItem("")
  }
  const editHandler = () => {
    const data = {
      id:existedTodo?.id,
      todoItem:todoItem
    }
    editTodoHandler(data)
     setTodoItem("")
  }
  return (
    <div>
     <input type="text" name="" id="" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
      <button onClick={existedTodo ? editHandler :submitHandler}>{existedTodo ? "Update Todo" : "Add Todo"}</button>
    </div>
  )
}

export default TodoForm