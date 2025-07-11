1. Compound Component Pattern

- This allows components to work together seamlessly by sharing internal state while keeping flexibility in their usage.
- Use when designing reusable components like dropdowns or modals.
- Example Use Case: A `component where` and `` work together.

2.  Render Prop Pattern

- Provides a function to control what gets rendered, giving more flexibility to components.
- Use when components need to share reusable logic without creating dependencies.
- Example Use Case: A `` component that uses a render prop to handle fetched data dynamically.

3.  Higher-Order Component (HOC)

- A function that takes a component and returns a new component with added functionality.
- Use when adding shared behavior like authentication or logging.
- Example Use Case: Wrapping a component with `withAuth` HOC to add user authentication logic.

4.  Controlled Component

- State is controlled via React rather than native DOM inputs.
- Use for forms where you need to maintain real-time state updates.
- Example Use Case: `` components where value updates are synced with React state.

5.  Custom Hook

- Encapsulates reusable logic for components using React’s hooks API.
- Use to avoid duplicating logic across multiple components.
- Example Use Case: A `useFetch` hook for reusable API calls.

6.  Context API

- Provides a way to pass data through the component tree without using props.
- Use for global state management when Redux is overkill.
- Example Use Case: A theme provider for managing light/dark mode across the app.

7.  Error Boundary

- A component designed to catch JavaScript errors and display fallback UI instead of crashing the app.
- Use to handle runtime errors gracefully.
- Example Use Case: Wrapping your entire app with an ``.

8.  Lazy Loading with Suspense

- Dynamically loads components only when needed, reducing initial load time.
- Use for optimizing large apps with many components.
- Example Use Case: Dynamically loading a heavy `` component only when it's visible.

9.  Portals

- Renders components outside of their parent DOM hierarchy.
- Use for modals, tooltips, or dropdowns.
- Example Use Case: A `` component rendered at the root of the DOM tree for accessibility.

10. Reducer Pattern

- Manages complex state transitions using `useReducer` for better readability.
- Use for components with intricate state logic.
- Example Use Case: Managing a multi-step form wizard's state.
