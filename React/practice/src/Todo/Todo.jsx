import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import TodoContext from './TodoContext'

const Todo = () => {
const {todoLists,deleteHandler,setEditTodo,editTodo} = useContext(TodoContext)
  return (
    <div>
      <h1>Todos</h1>

     {editTodo ? <TodoForm existedTodo={editTodo}/> : <TodoForm/>}
     {todoLists.length && <p>No todos found.</p>}
     <div>
      {todoLists?.map((item,idx) => (
        <div key={item.id}>
        <p><span style={{"fontWeight":'bold', "paddingRight":"5px"}}>{idx+1}</span>{item.todoItem}</p>
       <button onClick={() => deleteHandler(item.id)}>Delete</button>
       <button onClick={() => setEditTodo(item)}>Edit</button>

        </div>
      ))}
     </div>
    </div>
  )
}

export default Todo