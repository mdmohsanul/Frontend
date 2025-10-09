## What are events in Javascript?
- Events are the action or occurence that happens in browser that browser can respond to.
- Think events as signal that something has happened and JavaScript provide a way to listen these events and react to them.

# Example of events

1. User Interactions:
click, dblclick → when a user clicks a button
keydown, keyup → when a key is pressed or released
input, change, focus, blur → when form input changes
submit → when a form is submitted
mouseover, mouseout → when the mouse enters/leaves an element

2. Window/ Document Events:
load – when page or resource finishes loading
DOMContentLoaded – when initial HTML is loaded and parsed
resize – when window is resized
scroll – when page or element is scrolled
unload / beforeunload

3. Clipboard Events
copy, cut, paste

4. Touch / Pointer Events (for mobile/touch devices)
touchstart, touchmove, touchend
pointerdown, pointermove, pointerup

5. Media Events
play, pause, ended
timeupdate, volumechange

# Event bubbling and capturing are two ways of event propagation on the DOM tree.

# Event propagation is the process by which an event moves through the DOM after being triggered. It occurs in three phases:

1. Capturing Phase (Trickling Down) -- The event starts from the window and goes down to the target element. from parent to child (from top to bottom)
2. Target Phase – The event reaches the target element and executes its event listener.
3. Bubbling Phase (Propagating Up) --The event starts from the target element and bubbles up to the root. from child to parent (from bottom to top)

# So while writing any event listener if we want propagate event capturing then we have to pass the third argument known as useCapture which accepts boolean value.

# Now by default in every event Event bubbling is happening.

# When any event occurs happens then in the first cycle event capturing happens then event bubbling happens and we can control by passing the third parameter.

element.addEventListener("click", handler, true); // capturing phase
element.addEventListener("click", handler, false); // bubbling phase (default)


- if useCapture is true then event capturing will happen means from top to bottom.
- if usecapture is false or if we don't write any third argument then by default event bubbling will happen.

# Some important browser events

type, timestamp, defaultPrevent
target, toElement, scrElement, currentTarget
clientX, clientY, screenX, screenY
altKey, ctrlKey, shiftKey, keyCode

# So, to stop the propagation we have a method:

e.stopPropagation()

## Event Delegation

- Event delegation is a technique in JavaScript where instead of adding event listeners to individual child elements, we add a single event listener to a parent element. This works because of event bubbling, where events propagate up the DOM tree.
- It enhances performance and maintainability by reducing the number of event listeners.

Why Use Event Delegation?
✅ Improves performance – Avoids adding multiple event listeners.
✅ Works for dynamically added elements – Handles elements created later.
✅ Simplifies code – Reduces redundancy in event handling.

Use Cases of Event Delegation
1️⃣ Handling clicks on dynamic elements (e.g., buttons, menus).
2️⃣ Form validation – Using one listener for multiple inputs.
3️⃣ Table row selection without attaching events to each row.
4️⃣ Dropdown menus, modals, and infinite scrolling elements.

Pros of event delegation:

1. Save memory by writing less event handlers.
2. Less code
