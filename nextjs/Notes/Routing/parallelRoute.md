# Parallel Routes

- Parallel routing is an advanced routing mechanism that lets us render multiple pages simultaneously within the same layout.

# how to setup parallel routes

- Parallel routes in Next.js are defined using a feature known as 'slots'

- Slots helps organize content in a modular way

- To create a slot, we use the "@folder" naming convention.

- Each defined slots automatically a prop in its corresponding 'layout.tsx'

- slots are not route segment(means we cannot route it)

- layout recieves all the slots as props.

## Parallel routes use Cases

- Dashboards with multiple sections
- Split-view interfaces
- Multi-pane layouts
- Complex admin interfaces

## Parallel routes benefits

- Parallel routes are great for splitting a layout into a manageable slots.
- Independent route handling.
- Sub navigation

# Independent route handling

- Each slot in your layout, such as users, revenue, and notifications, can handle its own loading and error states.

- This granular control is particularly useful in scenarios where different sections of the page load at varying speeds or encounter unique errors.

# Sub-navigation in routes

- Each slot can essentially function as a mini-application, complete with its own navigation and state management.

- Users can interact with each section separately, applying filters, sorting data, or navigating through pages without affecting other parts.


