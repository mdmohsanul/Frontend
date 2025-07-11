# React Server Components (RSC)

- React Server components is a new architecture that was introduced by the react team and quickly adopted by Next.js
- This architecture introduces a new approach to creating React components by dividing them into two distinct types:

1. Server Components

- By default, Next.js treats all components as Server Components
- These components can perform server-side tasks like reading files or fetching data directly from a database

2. Client Components

- To create a client component, you'll need to add "use client" directive at the top of your component file.
- Client components are the traditional react component where you can use hooks.
