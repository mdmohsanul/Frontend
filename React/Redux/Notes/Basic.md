## Redux is a Javascript library (also written in javascript)

## Redux is built by Dan Abramov and Andrew Clark

## Redux is a predictable and maintainable state management library.

- Redux tell that give me all your application data in the form of object

## How redux store works

Step 1 -> you will create a object , that object will tell redux, what is the new value you want to update/ delete / add.
TYPE: based on type you will update specific data.

Step 2 -> You will send information created in step1, by calling a function , this function is provided by redux.

Step 3 -> Updater Function -> this will check what to updated, and based on that it will update the store and notify you.

Step 4 -> Based on notification update the UI or do whatever you want to do.

- Step 1 === Action
- Step 2 === dispatch(action)
- Step 3 === Reducer
- Step 4 === useSelector / subscribe to store

## To use redux

- install redux
