# Route Handlers

- The app router lets you create custom request handlers for your routes using a fetaure called Route Handlers.

- Unlike page routes, which give us HTML content, Route Handlers let us build RESTFUL endpoints with complete control over the response.

- Think of it like building a Node + Express app.

- It is like performing CRUD operations.

- Route handlers are great when making external API request as well.

- For example, if you're building an app that needs to talk to third-party services.

- Route handlers run server-side, our sensitive info like private keys stays secure and never reaches the browser.

- Route handlers are the equivalent of API routes in Page Router.

- Next.js supports GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

- If an unsupported method is called, NEXT.js will return a 405 Method Not Allowed in response.

## How to create route handlers
- we have to create inside app directory
- if in a folder there is page.tsx and route.ts then route.ts will serve on profile route. So, we have to create api folder and move route.ts to that folder.