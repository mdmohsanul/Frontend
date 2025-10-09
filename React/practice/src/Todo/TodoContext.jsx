import { createContext, useEffect, useState } from "react";


const TodoContext = createContext()

export default TodoContext


export const TodoProvider = ({children}) => {

const storedTodods = JSON.parse(localStorage.getItem("todos")) || []
const [todoLists,setTodoLists] = useState(storedTodods)

const addTodoHandler = (data) => {
    setTodoLists((prev) => [...prev,data])
}
const deleteHandler = (id) => {
    setTodoLists(prev => prev.filter(item => item.id !== id))
}
const [editTodo,setEditTodo] = useState(null)

const editTodoHandler = (data) => {
 console.log(data)
 setTodoLists((prev) => {

    const todoIndex = prev.findIndex(todo => todo.id === data.id)
    console.log(todoIndex)
    if(todoIndex !== -1){
 let updatedTodo = [...prev]
       updatedTodo[todoIndex] = data
       return updatedTodo
    }
   

 })
 setEditTodo(null)
}
useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoLists))
},[todoLists])
    return <>

        <TodoContext.Provider value={{addTodoHandler,todoLists,deleteHandler,editTodo,editTodoHandler,setEditTodo}}>
            {children}
        </TodoContext.Provider>
    </>
}