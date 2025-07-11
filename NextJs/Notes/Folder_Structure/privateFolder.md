# Private Folders

- Next.js don't include it in the routing system
- the folder and all the subfolders are excluded from routing
- Add an underscore at the start of the folder name
-  _lib (put utility functions)

# Private folders are super useful for a bunch of things

- Keeping your UI logic separate from routing logic
- Having a consistent way to organize internal files in your project.
- Making it easier to group related files in your code editor.
- Avoiding  potential naming conflicts with future Next.js file naming conventions

If you actually want an underscore in your URL , use "%5F" instead. That's just the URL- encoded version of an underscore.