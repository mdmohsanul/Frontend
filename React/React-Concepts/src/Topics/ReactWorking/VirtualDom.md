# DOM (Document Object Model)

- The Document Object Model is tree-like structure the represent your entire webpage on the browser.
- The DOM is how browser understands and interacts with HTML and CSS.
- It turns our HTML document into structured format (a tree of nodes) that javascript can read and manipulate.

- Everytime there is a change in the state of your application UI, the DOM gets updated to represent the change. Now the thing is frequently manipulating the DOM affects performance and making it slow.

What makes DOM manipulation slow?
- As we know the DOM is represented as tree data structure. Because of that the changes and updates are fast. But after the change the updated element and its children have to be re-rendered to update the UI.
- The re-painting of the DOM make it slow because it will reload the page again
- That is why DOM manipualation is expensive.

# Virtual DOM
- The VDOM is just JavaScript Object representation of the Real DOM.
- VDOM is a concept came long back, it is not a React Thing. React took and built its core algorithm on it.
The Virtual DOM is created during rendering — specifically when you call:
root.render(<App/>)

1. You write JSX like <App />

2. React compiles it (via Babel) to something like:
   React.createElement(App, null)

3. React builds a Virtual DOM tree — a lightweight JS object version of your UI.

4. React compares it (diffs) with the previous Virtual DOM.

5. React calculates the minimal set of changes (called reconciliation).

6. React applies those changes to the actual DOM (real browser DOM).

# How VDOM is faster?
When we render a React application, React creates a Virtual DOM — a lightweight, in-memory representation of the actual DOM built using JavaScript objects.

Initial Render:

React builds a Virtual DOM (VDOM) from your JSX.
It renders this VDOM into the real DOM for the first time.

On State/Prop Change:

React creates a new VDOM tree based on the updated state.
It compares the new VDOM with the previous one using a Diff Algorithm.

# What is the Diff Algorithm?

The Diff Algorithm finds the minimum number of changes needed by comparing the old and new VDOM trees.

Since VDOM is made of JavaScript objects, the comparison is very fast (much faster than manipulating the real DOM directly).

Once the differences (called "patches") are found, React efficiently updates only the affected parts of the real DOM.

# What is Reconcilation?
- The algorithm React uses to diff one tree with another to determine which parts needs to be changed.
- Reconcilation is a algorithm which uses VDOM behind the scenes.


# What is React Fibre?
- React Fiber is the core algorithm behind React's rendering. It allows React to update the UI in smaller chunks, prioritize updates, and handle complex apps more efficiently.

Fiber allows React to:

Pause work
Abort work
Resume work
Prioritize more important updates

1. Pause Work
React can pause rendering in the middle of an update if something more important needs to happen (like a user interaction).

🧠 Example:
You’re scrolling a list, and new data is loading in the background. React can pause the rendering of the data and let the scroll stay smooth.

2. Abort Work
If React realizes an update is no longer needed, it can cancel it to save time.

🧠 Example:
If a user types fast in a search box and React is rendering results for the first letter, but the user types more letters quickly, React can abort rendering the first result and focus on the latest input.

3. Resume Work
React can resume rendering from where it left off after being paused.

🧠 Example:
If React paused rendering to handle a button click or animation, it can go back and resume the previous update later.

4. Prioritize Updates
Not all updates are equally important. Fiber lets React decide which updates to handle first.

🧠 Example:

High priority: user typing, clicking

Low priority: fetching and displaying background data

React can render high-priority updates first, making your app more responsive.

🧵 Why This Matters:
Without Fiber, React used to render everything in one go — which could freeze the UI.
With Fiber, React splits rendering into small units and makes smarter decisions about when and what to render, keeping your app smooth.