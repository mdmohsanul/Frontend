# let and const — Block-scoped variables

let x = 10;
const y = 20;

- let is mutable, block-scoped
- const is immutable (but not deep frozen)

# Arrow Functions

const add = (a, b) => a + b;

- Shorter syntax
- Lexical this (doesn’t bind its own this)

# Default Parameters

function greet(name = "Guest") {
console.log(`Hello, ${name}`);
}

# Template Literals

const name = "Alice";
console.log(`Hello, ${name}!`);

# Destructuring

const [a, b] = [1, 2];
const { name, age } = { name: "Bob", age: 25 };

# Spread & Rest Operators

const nums = [1, 2, 3];
const copy = [...nums]; // Spread
const sum = (...args) => args; // Rest

# Enhanced Object Literals

const age = 30;
const person = {
name: "Sam",
age,
greet() {
console.log("Hello");
}
};

# Modules (import/export)

// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from './math.js';

# Promises

new Promise((resolve, reject) => {
resolve("Done!");
}).then(console.log);

# for...of loop
