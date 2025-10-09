# Advance Routing patterns

- Parallel Routes
- Intercepting Routes

# Intercepting Routes

- Intercepting routes is an advanced routing mechanism that allows you to load a route from another part of your application within the current layout.

- It's particularly useful when you want to display new content while keeping your user in the same context.

- While applying intercepting routes keep two things in mind the source folder and the target folder, we should create intercepted folder inside source folder.

# Example
Consider a login flow, typically when clicking on login link take us to login page. but with intercepting route we can dispaly a modal instead updating the URL to /login. So when user refresh the page it will show the full login page.

- Or consider a photo gallery instead of opening photo on full page we can display the photo on modal and also change the URL.

# Intercepting routes conventions

- (.) to match segmengts on the same level.
- (..) to match segments one level above.
- (..)(..) to match segments two levels above.
- (...) to match segments from the root app directory.