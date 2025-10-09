# What is React and explain its features and limitations?

React is an open source JavaScript library used for building user interfaces especially for single-page applications (SPAs). It focuses on creating dynamic and interactive web applications by allowing developers to create reusable UI components.

- Features:

* Component based architecture:
  UI is broken into reusable components (e.g., buttons, forms).
  Components manage their own state and can be composed to build complex UIs.

* Efficient updates Virtual DOM (Performance Optimization)
  React uses a Virtual DOM to minimize direct manipulation of the real DOM, making updates faster.
  Instead of re-rendering the entire page, it only updates the changed parts.

* One-Way Data Binding
  Data flows in one direction (from parent to child).
  Ensures predictability and easier debugging.

* Community and ecosystem
  React has large and active developer community and rich ecosystem of libraries and tools

* Cross Platform
  React can be used for both web and mobile development.(React Native)

- Limitations

* SEO Challenges
  React uses client-side rendering (CSR), which may not be ideal for SEO (Solution: Use Next.js for SSR).

* Fast-Paced Updates
  Frequent updates may lead to outdated codebases and also difficult to maintain documentation.

* React covers only UI layer of application so you still need to choose other technologies for building an web application.


# How does React decide when to re-render a component?

- State Changes (via useState, useReducer): React tracks state updates using useState.If state changes, React re-renders that component.

- Props Change: A component re-renders when it receives new props from its parent.

- Whenever state or props change react re-render the component and all the functions inside it will be recreated.

- Parent Component Re-renders (May Cause Child to Re-render): Even if props don’t change, a child may re-render if its parent re-renders.
wrap your children component with React.memo() to prevent unnecessary re-renders.

- Context Updates: When a React Context value updates, all components using it re-render.

8. What are key props in React, and why are they important

- Keys are special attribute or props that we include while creating lists of elements in react.
- It helps us to identify which item in the list is changed, updated or deleted.
Why do we need:
- Efficient Re-rendering (Reconciliation)
React uses key to match old Virtual DOM nodes with new ones.
Without keys, React may re-render the entire list unnecessarily.

- Avoid Bugs
Without stable keys, components may lose their state unexpectedly (e.g., input values get reset).
React might mix up list items.


9. How can you prevent unnecessary re-renders in React?

- Use React.memo, useCallback, and useMemo
- Avoid inline functions/objects
  <Component onClick={() => doSomething()} /> ❌
  const handleClick = useCallback(() => doSomething(), []); ✅
  <Component onClick={handleClick} />
- Keep State Local Where Possible
Lift state only when needed. Keeping state too high in the component tree can cause unnecessary re-renders for all children.
- Use Libraries Like Recoil/Zustand/Jotai (Optional)
For complex apps, these help avoid prop drilling and reduce re-renders by scoping state to specific components.


10. What is React.memo, and how does it optimize performance?
React.memo is a higher-order component that helps you optimize performance by preventing unnecessary re-renders of functional components.

const MyComponent = React.memo((props) => {
  // component logic
  return <div>{props.value}</div>;
});

How Does It Work?
When you wrap a component with React.memo, React:
Remembers the previous props
Skips re-rendering the component if the props haven't changed
This is similar to how PureComponent works for class components.

Important Notes:
React.memo does a shallow comparison of props by default.
If you’re passing functions or objects, use useCallback or useMemo to prevent unnecessary renders.

When to Use React.memo?
✅ Use it when:

Your component renders often with the same props
The component is pure (its output depends only on props)
It’s expensive to render (e.g., large lists, charts)

❌ Avoid it when:

Props always change
The component is very small/simple (memoizing may add unnecessary complexity)

11. What is the difference between PureComponent and React.memo
12. What are synthetic events in React, and how do they work
13. What are the common performance issues in React and how to fix them
