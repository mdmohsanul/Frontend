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


# Unmatched Route

Navigating from the UI:
When navigating through the UI(like clicking links), Next.js keeps showing whatever  was in the unmatched slots before.

- But in Page Reload Next.js looks for a default.tsx in each unmatched slot.

- This is critical as it serves as a fallback to render content when the framework cannot retrieve a slots active state from the current URL.

- Without the file, you'll get a 404 error

### All examples in complex-dashboard folder

# Conditional Routes

- Imagine you want to show different based on whether a user is logged in or not.

- You might want to display a dashboard for authenticated users but show a login page for those who aren't.

- Conditional routes allow us to achieve this while maintaining completely separate code on the same URL.

