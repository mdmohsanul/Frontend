# Route Groups

- Lets logically organize our routes and project files without impacting the URL structure.

# practical example in authentication folder

Let's implement authentication routes
- Login
- Register
- Forgot password

- (auth)
   login
    page.tsx
   register
    page.tsx

# if we wrap a folder inside (auth) then we don't have to include the auth in the url structure

# Folder without ()
http:3000/auth/login

# Folder with ()
http:3000/login
