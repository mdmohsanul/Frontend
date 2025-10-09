## Synthetic Events

- Synthetic events in React are just wrapper around the browser native events.
- React doesn't attach individual event listener to each element.
- Instead it sets up single event listener on the root (using event delegation).
- When a native event occurs, React catches it, creates a SyntheticEvent object, and passes it to your event handler.

# Why Synthetic events?
- Cross-browser consistency: React abstracts away quirks between browsers.
- Delegation: Instead of attaching thousands of listeners, React attaches one listener at the root, then figures out which     component should handle it → better performance.
- Automatic cleanup: React removes event listeners when components unmount.