/* 


Debouncing is a technique used to limit the number of times a function is executed. 
It ensures that a function only runs after a specific delay once the last event is triggered.

🔹 Why Use Debouncing?
Prevents excessive function calls (e.g., API calls on every keystroke).
Improves performance in high-frequency events like scrolling, resizing, or typing.

🔹 Real-World Use Cases
Search bars (delay API calls while typing).
Window resize events (prevent multiple calculations).
Scroll events (optimize infinite scrolling).
*/
// the issue with this function is it will execute everytime we leave any key
let counter = 0;
function getData(e) {
  console.log(`key pressed ${counter++}`);
}

// So to optimize it we use debouncing

function myDebounce(func, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, d);
  };
}

const betterFunction = myDebounce(getData, 1000);
