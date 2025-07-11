## useState hook used to add and manage state variable in functional component.

- It returns an array with two elements the current state value and a setter function to update that value.

- State variable keeps our data layer and UI layer sync.
- Always write state variable inside fuctional components.
- Never declare useState inside conditional blocks.
- Whenever we invoke the set it trigger the diff algorithm and update the UI
- Whenever a state variable is updates react re-render the component.

Syntax

const [state,setState] = useState(initialValue)
const arr = useState(initialValue)
const [state,setState] = arr

# Can you update state directly?

❌ No. Always use the setter (setState) — direct mutation won’t trigger a re-render.

# What happens when you update state?

The component re-renders with the new state.

# How do you update state based on the previous state?

setState(prev => prev + 1)
