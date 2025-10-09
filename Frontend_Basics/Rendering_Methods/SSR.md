# Server Side Rendering

- Data is fetched on every request at runtime
- Generate on each request
- The rendering will happen on server side. means server takes majority of the load.
- The Client request a webpage and based on the request a webpage is generated in server then sent it to client.
- All the HTML, CSS and Js will sent in just one go

- Server has having higher computing power as compared client so thats why SSR are faster than CSR


example - LinkedIn job listing page , ecommerce product listing page 


# Server Side solutions

- Search engines can now easily index the server-rendered content, solving our SEO problem.
- Users see actual HTML content right away instead of staring at a black screen or loading spinner.

# Hydration 

- During hydration, React takes control in the browser and reconstructs the component tree in memory, using the server-rendered HTML as a blueprint.

- It carefully maps out where all the interactive elements should go, then hooks up the javascript logic

- This involves initializing application state, adding click, mouseover handlers and setting up all the dynamic features needed for a full interactive user experience.


# Categorized in two main category

1. Static Site Generation (SSG)
2. Server-Side Rendering (SSR)

SSG happens during build time when you deploy your application to the server. This results in pages that are already rendered and ready to serve, It's perfect for content that stays relatively stable, like blog posts.

SSR, on the other hand, renders pages on-demand when users request them. It's ideal for personalized content like social media feeds where the HTML changes based on who's logged in

## Drawbacks of SSR

1. You have to fetch everything before you can show anything

Components cannot start rendering and then pause or "wait" while data is still being loaded.

If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page.

This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.


2. You have to load everything before you can hydrate anything

For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree.

This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them.


3. You have to hydrate everything before you can interact with anything

React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree.

As a consequence, all components must be hydrated before you can interact with any of them.

# Drawbacks of SSR - all or nothing waterfall

1. We can't start rendering HTML until all the data is fetched on the server.
2. We need to wait for all JavaScript to load on the client before hydration can begin.
3. Every component needs to be hydrated before any of them become interactive.

at once, create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one