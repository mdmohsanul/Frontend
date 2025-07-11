// Runs a function repeatedly every specified delay (in milliseconds).

// syntax = setInterval(callback, interval, ...args);

setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

// Like setTimeout, you can cancel it with clearInterval():

const intervalId = setInterval(() => {
  console.log("Still running...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId); // stops the interval after 5 seconds
  console.log("Stopped the interval");
}, 5000);
