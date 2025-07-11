/* 
Higher Order functions - A function that either takes another function as an argument or returns a function or does both.

In JavaScript functions are treated as first-class citizens — meaning you can pass them around just like variables.

*/

function greet(name) {
  return `Hello, ${name}`;
}

function withLogging(fn) {
  return function (...args) {
    console.log("Calling function with:", args);
    return fn(...args);
  };
}

const loggedGreet = withLogging(greet);
console.log(loggedGreet("Alice"));

/* 
--------------------   In-built HOF's in Javascript  ------------------------
-- forEach(() =>{}) -> Runs a callback for each element in an array.
-- map((item,index) => {}) -> Transforms each item in an array and returns a new array.
-- filter((item,index) => {}) -> Returns a new array with items that pass a condition.
-- reduce((accumulator,current,index) => {},initial value -> Reduces an array to a single value.
-- find(callbackFn, thisArg)  ==== find((item) => {})  -> Returns the first value that passes the condition.

In reduce method the accumulator is the initial value
*/

// --------------------   reduce  ---------------------------

// array of objects into objects
const data = [
  { key: "name", value: "John" },
  { key: "age", value: 25 },
  { key: "city", value: "London" },
];

const transformData = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(transformData);

// nested array into single array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenArray = nestedArray.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flattenArray);

// array of objects into an array
const students = [
  { name: "John", grade: "A" },
  { name: "Alice", grade: "B" },
  { name: "Bob", grade: "C" },
];

const grades = students.reduce((acc, curr) => {
  acc.push(curr.grade);
  return acc;
}, []);
console.log(grades);

// ---------------- find ----------------------------
//The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

//from the above data object find the object which has key age

const findAge = data.find((item) => item.key === "age");
