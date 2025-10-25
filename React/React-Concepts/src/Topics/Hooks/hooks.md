1. What are React Hooks, and why were they introduced?

- Hooks are the javascript utility functions that were introduced in React 16.8 that allow functional components to manage state and side effects.

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


2. What is useState, and how does it work?
3. What is useEffect, and what are its common use cases?
4. What is the difference between useEffect and lifecycle methods in class components?
5. What is useRef, and how does it help manage DOM elements?
6. What is useMemo, and how does it optimize performance?
7. What is useCallback, and how does it prevent unnecessary re-renders?
8. What is useContext, and how does it simplify prop drilling? 
9. What is useReducer, and when should you use it instead of useState?
10. What is the difference between useMemo and useCallback?
11. What are custom hooks, and how can they be useful?

- Custom hooks are our own resuable functions which uses more than one in-built react hooks to share logic between components.
- A JavaScript function whose name starts with use and that can call other Hooks inside it.

Advantages of using custom hooks:
Reuse logic between multiple components
Separate concerns (e.g., data fetching, form handling, etc.)
Keep components clean and focused on UI
