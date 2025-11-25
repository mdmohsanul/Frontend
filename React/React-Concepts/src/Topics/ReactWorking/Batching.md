# Batching

# What is batching?

Batching is React’s optimization where multiple state updates in the same event loop are grouped into one render, reducing unnecessary re-renders and making UI updates efficient.

If you update the state back-to-back, React doesn’t re-render after each update.
It collects all changes and applies them in a single render pass.

# Before React 18 — Limited Batching

React batched updates only inside React-managed event handlers:

onClick={() => {
  setA(1);
  setB(2);
}}

This gives one render, because React controls the event.

But async callbacks were NOT batched:

setTimeout
Promise / async–await
fetch callbacks
eventListeners (native)
subscriptions (WebSocket, Firebase)

Each state update caused its own render → performance loss.

# React 18 — Automatic Batching Everywhere

React 18’s new concurrency engine allows batching in all scenarios:

setTimeout(() => {
  setC(3);
  setD(5);
});

Both run in one render, even though it’s outside a React event.

React now batches updates across:

timeouts
promises
fetch responses
native event listeners
async callbacks

This was impossible before.

# How batching works internally (correct wording)

State updates are added to an internal update queue.
React does not immediately re-render; it schedules a render.
During the same event loop tick, React keeps collecting more updates.
When the event loop flushes (sync or async), React processes all updates together.

A single render + reconciliation happens at the end.

This reduces:

duplicate renders
wasted reconciliation
unnecessary DOM updates