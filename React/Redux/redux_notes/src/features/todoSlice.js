import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid is provided by reduxToolkit to generate unique id

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// function sayHello(){
//     console.log('Hello world')
// }
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // stores key value
    // addTodo: sayHello //give reference of function, don't call it.
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;

// we have to export all the reducer bcoz the store wants the access of all reducers
export default todoSlice.reducer;
