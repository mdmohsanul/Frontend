# Routing

- It supports file based routing system.
- URLs you can access in your browser are determined by how you organize your files and folders in your code.

# Routing Conventions

1. All routes must live inside the app folder.
2. Route files must be named either page.tsx or page.ts.
3. Each folder represent a segment of the path URL.

When these conventions are followed, the file automatically becomes available as a route.

# Dynamic Route  (https://localhost:3000/products/4)

- create a folder using square brackets []. eg: [productId]
- every page in the app router recieves route parameters through the params props

# Nested Dynamic Route (https://localhost:3000/products/4/reviews/2)

- create a folder inside [productId] named review
- in review folder create another folder [reviewId] and create a page inside it.
- extract the productId and reviewID from the params props

# Catch-all-segments

- create a folder docs inside that create another folder with [...slug] and page inside this.
- It matches any URL with docs in the path
- http://localhost:3000/docs/feature1/concept1 -- it will map to the slug page file
- it captures all URL segments and handles them in the single file this is perfect for documentation sites where you want different URL segments for organization and SEO but keep the same basic layout.

- But when we try to access ( http://localhost:3000/docs) docs we get 404 error
- to resolve this wrap the [...slug] folder with one more square brackets [[...slug]]