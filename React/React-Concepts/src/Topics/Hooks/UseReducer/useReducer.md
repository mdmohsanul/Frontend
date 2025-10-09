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

# Use useReducer for Complex State Logic Instead of Overloading useState 

When managing complex state transitions, especially when multiple related pieces of state depend on each other, useState can quickly become difficult to manage. 

This is where useReducer shines — it allows you to centralize state logic in a single place, making your code more predictable and easier to maintain.

✅ Why Use useReducer?

→ Centralized Logic: All state transitions are handled in one reducer function, making it easier to debug and test.

→ Scalable: Works well for forms, multi-step workflows, or any scenario with interdependent state values.

→ Readable: Keeps your component clean by moving state logic out of the JSX.

✅ Key Benefits of useReducer:

→ Separation of Concerns: The reducer function keeps state logic separate from the UI, making components easier to read and maintain.

→ Predictability: With a single source of truth for state updates, it’s easier to track how state changes over time.

→ Reusability: You can reuse the same reducer across multiple components if needed.
