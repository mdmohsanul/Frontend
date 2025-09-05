# TEMPLATES

Templates are similar to layouts in that they are also UI shared between multiple pages in your app.

Whenever a user navigates between routes sharing a template, you get a completely fresh start.

- a new template component instance is mounted.
- DOM elements are recreated.
- state is cleared.
- effects are re-synchronized

# It is useful in scenarios like enter and exit animation and useEffect to run when routes changed

# create a template by exporting a default React component from a template.ts or template.tsx file.
# Like layouts, template need to accept a children prop to render the nested route segments