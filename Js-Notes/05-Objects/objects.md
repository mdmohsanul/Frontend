# What is an object in JavaScript? How is it different from an array?

- An object in JavaScript is a collection of key-value pairs where keys are strings or Symbols, and values can be any data type (strings, numbers, functions, or even other objects).

- in object we store data in key value pair and in background keys are converted to string. eg - 'name','age' etc

# How do you create an object in JavaScript?

- refer to code

# What are the different ways to access object properties?

- obj.key
- obj["key"]

# What happens if you try to access a non-existing property of an object?

- Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
- to prevent from this error we have to use Optional Chaining.

# How do you iterate over an object’s properties?

- for...in loop
- Object.keys()
- Object.entries()
- Object.values

# How to check property exists or not?

- console.log("email" in user); // false
- console.log(user.hasOwnProperty("age")); // true
- console.log(Object.hasOwn(user, "name")); // true (ES2022+)

# Difference between shallow copy and deep copy?

- A shallow copy only copies the top-level properties, while a deep copy creates a completely independent copy of an object, including nested objects.
