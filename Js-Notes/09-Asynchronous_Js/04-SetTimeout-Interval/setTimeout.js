// Runs a function once after a specified delay (in milliseconds).

// syntax = setTimeout(callback,delay,...args)
// 1000 = 1 second

setTimeout(() => {
  console.log("runs after 2 seconds");
}, 2000);

// if we want to clear the setTimeout

const timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timeoutId); // cancels the timeout
