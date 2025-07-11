## If run in vanilla Js Project

- create app with vite (npm create vite@latest)
- npm i redux
- create a reducer.js file

## If run in React Project

- npm i redux
- npm i react-redux

- npm i redux-thunk

## react-toolkit

- npm i react-redux
- npm i @reduxjs/toolkit
- create app folder
  - inside app create store.js file
- create features folder
  - in these we create our application features in different slices

## Slice

through createSlice we can create slices which takes an object with some properties like:
1 - name
2 - initialState (we provide some data or we can fetch data from api and put on it)
3 - reducers - it is an object with properties and functions
by default these function have two parameters (state,action)
state - all the values inside initialState
action - if we want some value

4 - the slice and reducers have to export individually
eg: export default todoSlice
export const {addTodo,removeTodo} = todoSlice.actions
