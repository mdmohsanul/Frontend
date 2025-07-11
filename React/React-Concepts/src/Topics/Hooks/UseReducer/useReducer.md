# Syntax

The useReducer hook is an alternative to useState for managing complex state logic in React components

- Helps centralize state updates using action types.
- Better state management than multiple useState calls.

# const [stateVariable, dispatch] = useReducer(reducer,initialValue)

- It returns an array containing the current state and a dispatch function.

# Dispatch Function

- It is used to send action to the reducer, which in turn updates the state based on the action's type and any associated data
  ie payload.

# Reducer Function

- A function that takes current state and an action as parameter which determines how state changes based on an action.

# Initial Value

- The initial state value (the inital value can be a simple value, an object or even derived from a function if the initialization is complex)
