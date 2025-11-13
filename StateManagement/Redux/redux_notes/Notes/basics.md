## What is redux?

- redux is an independent state management library used in Js apps. It simply manages the state of your application.

# Principles of Redux

- Single Source of Truth -> The state of the application is stored in one object tree called store. It means one app one store.
- State is read-only(Immutable): It means that we don't change the state object and its state directly.
- Changes are made with pure functions(reducers) : Reducers are pure functions that take current state and action.

# Building Parts of Redux

- Action
- Reducer
- Store

## Actions

- Actions are plain Js object that contains information of what needs to be done.
- Actions have type field that tells what kind of action to be performed and many other fields like payload etc.

## Reducer - takes an action and state value

- Reducer are pure function that take current state and action as a parameter
- reducer is a function accepts two parameter (state,action)
- state is the initialvalue of the state variable
- action -> It is an object with many properties like type, payload etc.
- all our logic part is done inside our reducer what has to be done based on our dispatched action and what has to be changed with our state value

## Action - means what needs to be done

- and the action come from the view/ui (button, links, events), so if we click a button we dispatch an action

## Store - Once our state is updated based on the action and logic performed, updated state is gets stored into our store

## View/UI - It is subscribed to the store so any changes in the state value it updated our store

## Action creators - means what action means what (to make our code more modular)

## store - every application have only one store known as single source of truth

## reducers

## useSelector - It is a hook provided by react-redux which takes a callback fn to get the state value.

## useDispatch

- dipatch use reducers to change the value in store

## Middlewares

- it is a piece of code that sits between two components of your application.
- it allows communication and managemant of data between those two components so wherever we apply middleware between two components it allow us for easy communication and management of some data.

Specifically what middlewares does in redux?

- It is used to extend the capability of redux store between dispatching an action, and the moment it reatches the reducer
- when an action is dispatch it passes through middleware chain and this middleware can also stop the action from reaching from reducer .

# Custom Middleware

- middleware chain
  eg: const loggerMiddleware = (store) => (next) => (action) => {}

next - > it is function in redux middleware that helps in controlling the flow of the dispatched action through the middleware chain which ultimately reaches the reducer.

- the next function allow an action to proceed to the next middleware in the chain
- If we not call the next it block the action to reach the reducer

# Redux Thunk middleware

- In real-world applications we fetched data from server ,saving data to database these operations are asynchronous.
- It helps us solve this asynchronous problem and it let us dispatch functions instead of plain objects.

## Redux Toolkit

# Slice

- A piece of a bigger state.

- Without using redux toolkit we have created one global state and all our data stored in it.
- Using redux toolkit we'll create pieces of those states in various places, these are known as slices

- If we put everything on the store it becomes heavy and any upadate it will render the whole store

- while making big applications our store become very big and any update on it will run re-render store for the entire application which can be costly for our applications

# From slice we have to do Two exports

- actions: export const {addTodo,removeTodo} = todoSlice.actions
- reducer: export default todoSlice.reducer

# API calls in redux toolkit

- createAsyncThunk provided by redux toolkit
- It takes 3 parameters

1. Type
2. Payload
