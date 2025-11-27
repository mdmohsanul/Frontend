1. What are React Hooks, and why were they introduced?

- Hooks are the javascript utility functions that were introduced in React 16.8 that allow functional components to - - - manage state 
- run side effects.
- access context
- reference DOM nodes
- optimize performance
- integrate custom logic means custom hooks

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

useState – local component state
useEffect – side effects (API calls, subscriptions, timers)
useContext – access global context values
useRef – reference DOM nodes or store mutable values
useReducer – complex state (Redux-like)
useCallback – memoize functions (avoid re-renders)
useMemo – memoize expensive calculations
useLayoutEffect – like useEffect but runs earlier (DOM sync),Used when measuring DOM.
useId – stable IDs for accessibility/forms
useTransition – concurrent UI updates
useDeferredValue – lag UI optimization
useImperativeHandle – customize ref behavior
useSyncExternalStore – for state libraries
useOptimistic (React 18+) – optimistic UI

11. What are custom hooks, and how can they be useful?

- Custom hooks are our own resuable functions which uses more than one in-built react hooks to share logic between components.
- A JavaScript function whose name starts with use and that can call other Hooks inside it.

Advantages of using custom hooks:
Reuse logic between multiple components
Separate concerns (e.g., data fetching, form handling, etc.)
Keep components clean and focused on UI
