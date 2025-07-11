# What are React Hooks, and why were they introduced?

- It is a normal Js utility functions
- React Hooks are built-in functions introduced in React 16.8 that allow functional components to manage state and side effects without needing class components.

Hook were introduced for functional components:
For managing the state and side effects in our component.
For writing readable and maintainable code.
We can create our own custom hook to reuse the logic in any of the components.

Earlier in class component it is hard to reuse the logic
There were more boilerplate code like this,constructor, binding make our class components more complex
Difficult Lifecycle Management → componentDidMount, componentDidUpdate, componentWillUnmount often had duplicate logic.

Hooks Rules:

- Hooks can only be called inside functional component.
- Hooks can only be called at the top level of the component.
- Hooks cannot be conditional.

# What is useState, and how does it work?

- useState hook allows functional components to manage state.
- It is used to declare state variables within a functional component and provides a function to update that state variable.
- State variables keeps our data layer and UI Layer sync.

So, whenever we update our state variable through the set function react re-renders that component and also trigger the diff algorithm and update the UI.

# What is useEffect, and what are its common use cases?

# What is the difference between useEffect and lifecycle methods in class components?

# What is useRef, and how does it help manage DOM elements?

# What is useMemo, and how does it optimize performance?

# What is useCallback, and how does it prevent unnecessary re-renders?

# What is useContext, and how does it simplify prop drilling?

# What is useReducer, and when should you use it instead of useState?

# What is the difference between useMemo and useCallback?

# What are custom hooks, and how can they be useful?
