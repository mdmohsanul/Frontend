# Different ways to manage state in our applicatons?
- Manage state locally using useState hook
- Manage state globally using (Context API, Redux Toolkit, Zustand, Recoil)
- Server state using React Query

# When would you use local state vs global state?
- When the state is local for component specific data like (input, toggle)
- Use global when state is used for multiple components like (theme, auth or some user data)

# What problems can occur if you store everything in global state?
- Unnecessary re-renders
In libraries like Redux, when the global state changes all the components subscribed to that part of the state re-render.

- Tight coupling between components
Components depend on the same global data, reducing modularity

- Hard to debug like which part of the state is update and why.

# Explain prop drilling and how to avoid it.
- Prop drilling in react happens when we pass props(data) from top level component down to deeply nested child components even though those components does'nt need that data.

Problems is prop drilling
- Un-necessary re-renders
- reduced component resuability
- hard to maintain and debug

# What are the performance issues with Context API?

- All cosumers re-render when the context value changes even they don't use th echanged part.
- frequent update to context (like live data ) can cause unnecessary re-renders so always keep those data which are rarely change like (theme, auth) and avoid data that frequently changing.

# How do you optimize re-renders in a Context-based state management setup?

- Split the context instead of having one big one (AuthContext, themeContext etc)
- Move providers closer to consumers:
Don’t keep all providers at the root. Place them near components that actually use them to limit re-render scope.
- Use libraries like use-context-selector to re-render only when the specific part of the value changes.
- Memoize context value:
Wrap the provider’s value in useMemo() so the reference only changes when needed.

const value = useMemo(() => ({ user, updateUser }), [user]);
<UserContext.Provider value={value}>{children}</UserContext.Provider>