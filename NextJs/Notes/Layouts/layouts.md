# Layouts

- Pages are route specific UI components
- A layout is UI that is shared between multiple pages in your app

Header
Content
Footer

- the content will change and the Header and footer remains in every page

# How to create layout

- Every next.js file have a root layout inside the app folder.

- Default export a React component from a layout.js and layout.tsx file
- That component takes a children prop, which Next.js will populate with your page content.

# Nested Layouts

- It helps us to create layout of a specific part of our application.

# Multiple root layouts

- suppose in our application I want to show header and footer in every pages but not in the login and signup page

- Route Group uses:

Organize our project structure without affecting URLs
Apply layouts selectively to specific parts of our app

- Create two folders (auth) and (customers)
- create layout in both auth and customers folder
- move the page.tsx of app folder to customer folder