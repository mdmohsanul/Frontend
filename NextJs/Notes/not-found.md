# to create a customized not found page globally 
- create a file not-found.tsx/js inside the app folder
- write down your own 404 not found message

# If we want to apply conditional not-found page 

- like if we want to show 1000 review only of a product if user wants to access reviewID with 1021 then we want to show 404 not-found page

- In review page 
import { notFound } from 'next/navigation';
if(parseInt(reviewId) > 1000){
         notFound()
}

# Specific 404 pages for review sections

- create a not-found page inside the reviewID folder.
- It doesn't have access of the params props so we use usePathname hook if we want the productId and reviewID