# Ways to manage state in our application

# 1. React Built-in State (Local State)

- Best for: Component-level state (e.g. input values, modal open/close).
- Managed using useState, useReducer, or useRef.

# 2. React Context API

- Best for: Global state shared across many components (like theme, auth, language).
- Works via createContext() and useContext().

⚠️ Downside: Causes re-renders for all consumers when value changes; not efficient for frequently updating data (like typing).

3. URL, Query Params, and Search Params

- Best for: State that should be shareable via URL (like filters, pagination, sorting).
- In Next.js App Router, you can use:

➡️ Great for server-side rendering or sharing state via links.

# 4. Redux / Redux Toolkit

- Best for: Large, complex apps where you need predictable global state and debugging tools.
- Integrates well with Next.js using Provider in layout.tsx or _app.tsx.
⚡ Advantages:

Centralized global store
Middleware support (like Thunk)
DevTools integration
Scalable for large teams

# 5. Zustand

- Best for: Simpler global state without Redux boilerplate.
- Lightweight and supports persistent or server-synced states.

⚡ Very efficient — doesn’t re-render unrelated components.

# 6. Browser Storage (localStorage / sessionStorage)

✅ Best for: Persisting small pieces of state between reloads.
💡 Can be used with hooks:

useEffect(() => {
  localStorage.setItem("theme", theme)
}, [theme])

⚠️ Only available on the client — not during SSR.

# 7. React Query / TanStack Query

✅ Best for: Server state — data fetched from APIs (not UI logic).
💡 Handles caching, background refetching, optimistic updates, etc.