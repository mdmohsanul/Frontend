// there ways to handle events in JavaScript

/* 

Inline HTML Event Handlers (old way)
<button onclick="alert('Button clicked!')">Click Me</button>

DOM Property (Traditional way)
<button id="btn">Click Me</button>

<script>
  const btn = document.getElementById("btn");
  btn.onclick = function() {
    alert("Button clicked!");
  };
</script>

addEventListener (Modern way) ✅
<button id="btn">Click Me</button>

<script>
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    alert("Button clicked!");
  });
});

*/

// When an event happens, the browser creates an event object with details:
btn.addEventListener("click", function(event) {
  console.log(event.type);      // "click"
  console.log(event.target);    // <button>
});



// addEventListener takes three parameters
element.addEventListener(type, listener, options/useCapture);

element.addEventListener("click" , function(e){}, {
  capture: true,      // use capturing
  once: true,         // run only once
  passive: true       // never call preventDefault()
})

// removeEventListener()
// The method removes an event listener that was previously added with addEventListener.
// All three parameters (type, listener, and options/useCapture) must match exactly what was used in addEventListener.

const btn = document.getElementById("btn");

function handleClick() {
  console.log("Button clicked!");
}

// add listener
btn.addEventListener("click", handleClick);

// remove listener after 3 seconds
setTimeout(() => {
  btn.removeEventListener("click", handleClick);
  console.log("Listener removed");
}, 3000);

// this won't work because anonymous function have different references in memory
btn.addEventListener("click", function() {
  console.log("Clicked!");
});

btn.removeEventListener("click", function() {
  console.log("Clicked!");
});

// **** So Always use named function if you want to removeEventListener
/* 
You cannot remove anonymous functions.
Always keep a reference to the handler if you’ll remove it.
The 3rd parameter must match (true/false or object).
*/


// with options

btn.addEventListener("click", handleClick, { capture: true });

// must match the same options
btn.removeEventListener("click", handleClick, { capture: true });
