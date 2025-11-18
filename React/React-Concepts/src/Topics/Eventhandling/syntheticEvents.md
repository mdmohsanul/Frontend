## Synthetic Events

- Synthetic events in React are just wrapper around the browser native events.
- React doesn't attach individual event listener to each element.
- Instead it sets up single event listener on the root (using event delegation).
- When a native event occurs, React catches it, creates a SyntheticEvent object, and passes it to your event handler.

# Why Synthetic events?
- Cross-browser consistency: React abstracts away quirks between browsers.
- Delegation: Instead of attaching thousands of listeners, React attaches one listener at the root, then figures out which     component should handle it → better performance.
- Automatic cleanup: React removes event listeners when components unmount.

# When user clicks a button:

Browser fires native click event
Event bubbles to React root container
React’s global handler catches it
React creates SyntheticEvent
React finds the correct fiber node (component)
React calls your component’s handler
SyntheticEvent is cleaned up

Before React 17:
All events were attached to document.

After React 17:
Events are attached to the root container, not document.

# Ways to write event handlers

- onClick={handler} - best and optimized and reusable
- onClick={() => handler()} 
- onClick={(e) => handler(e)} - less optimized just a wrapper

if you want to pass some custom arguments
- onClick={(e) => handler(e,args)}

- onClick={handler(args)} - optimized with arguments (best usecase of currying)