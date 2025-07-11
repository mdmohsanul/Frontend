# What is JSON?

- JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data between a
  server and a client. It is similar to JavaScript objects but only supports strings, numbers, booleans, arrays,
  and objects (no functions or undefined values).

# JSON Data

{
"name": "Alice",
"age": 25,
"isStudent": false,
"skills": ["HTML", "CSS", "JavaScript"]
}

# JS object

const user = {
name: "Alice",
age: 25,
isStudent: false,
skills: ["HTML", "CSS", "JavaScript"]
};

# How to Convert Objects to and from JSON?

# Convert JavaScript Object to JSON (JSON.stringify())

- To send data to a server or store it in localStorage, you convert an object into a JSON string.

const user = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user);

console.log(jsonString);
'{"name":"Alice","age":25}' (string format)

# Convert JSON String to JavaScript Object (JSON.parse())

- To retrieve data from an API or localStorage, convert a JSON string back into a JavaScript object.

const parsedData = JSON.parse(jsonString);
console.log(parsedData.name); // "Alice"
console.log(parsedData.age); // 25

- JSON.stringify() outputs a string.
- JSON.parse() converts a string back into an object.
- JSON.stringify() removes functions and undefined values.
