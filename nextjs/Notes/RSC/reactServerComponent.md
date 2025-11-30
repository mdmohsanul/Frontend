# The evolution of React 

- CSR -> SSR -> Suspense for SSR

Suspense for SSR brought us closer to a seamless rendering experience.

# Challenges

- Larger bundle sizes causing excessive downloads for users.
- Unnecessary hydration delaying interactivity.
- Heavy client-side processing leading to poorer performance.

# React Server Components (RSC)

- React Server Components (RSC) represent a new architecture designed by the React Team.

- This approach leverages the strengths of both server and client environments to optimize efficiency, load times, and interactivity.

- The architecture introduces a dual-component model
   - Client components
   - Server Components

- This distinction is based not on the components functionality but rather on their execution environment and the specific systems they are designed to interact with.

# Client Components 
- they are typically rendered on client side, but they render or server side once so that user can get faster HTML page.

# Server Components 
- They are the react components that runs on server and never ship the JS to browser.

* Benefits
1. Small bundle size as they run on server all the dependencies stay there.
2. No hydration process
3. Direct access to server-side resources like databases, file system etc
4. Faster initial page load and First contentful paint- By generating HTML on the server user see the content immediately , no waiting to download and execute JS