// Settimeout is a browser API that schedule a function to run once after a specified delay (in milliseconds).


/* 
syntax = setTimeout(callback,delay,...args)
callback - a function to be executed after a delay
delay - time in milliseconds
args - optional arguments that is passed to the callback

*/
function greet(name){
  console.log(`Hello ${name}`)
}

setTimeout(greet, 2000,"Hoda");

// if we want to clear the setTimeout

const timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timeoutId); // cancels the timeout
