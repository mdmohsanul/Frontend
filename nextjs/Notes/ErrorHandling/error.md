# error file

- It must be client component
- Create error file inside folder which you think it will throw an error and design your error file

- The ErrorBoundary component accepts props like error,reset function

# example in product/reviewId


- It automatically wraps route segment and their nested children in a React Error Boundary.
- You can create custom error UIs for specific segments using the file-system hierarchy.

- It isolates error to affected segments while keeping the rest of your app functional.

- It enables you to attempt to recover from an error without requiring a full page reload.


# Handling errors in nested routes

- Errors always bubble up to find the closest parent error boundary.
- An error.tsx file handles errors not just for its own folder, but for all the nested child segments below to it.
- By strategically placing error.tsx files at different levels in your route folders, you can control exactly how detailed your error handling gets.
- Where you put your error.tsx file makes a huge difference - it determines exactly which parts of your UI get affected when things go wrong.

# Handling global errors

- If an error boundary can't catch errors in the layout.tsx file from the same segment, what about errors in the root layout?

- It doesn't have a parent segment - how do we handle those errors?

- Next.js provides a special file called global-error.tsx that goes in your root app directory.

- This is your last line of defense when something goes catastrophically wrong at the highest level of your app.