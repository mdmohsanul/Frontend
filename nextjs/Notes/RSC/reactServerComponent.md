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