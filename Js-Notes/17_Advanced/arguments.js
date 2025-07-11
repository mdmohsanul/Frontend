/* 
What are Arguments in JavaScript?

In JavaScript, arguments refer to the values passed to a function when it is called. These arguments are accessible 
inside the function and can be used to perform operations.

arguments object (Only in Regular Functions)

In JavaScript, all functions (except arrow functions) have an arguments object that holds all passed arguments.

- The arguments object allows us to handle an unknown number of arguments.

- Note: The arguments object is not available in arrow functions.

arguments object is array like object but not an actual array means we don't have array methods like map, filter, slice
BUT WE APPLY FOR LOOP

*/

function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Alice", 25);

// here "Alice" and 25 are the arguments.

function sum() {
  let value = 0;
  for (let i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }
  return value;
}

console.log(sum(2, 6, 7, 1, 7, 9));
