# JavaScript
- JavaScript is high level, dynamically typed , single threaded programming language primarily used to create dynamic and interactive web content. It runs in the browser enables client side behaviour like DOM manipulation and it is also widely used on the server side with environments like node.js.
- High level: abstracted from low level(memory management)
- Dynamically typed: Variable types are determined in run time.
- Single-threaded (with async capabilities): Uses event loop & callbacks/promises for async operations 

## How Javascript handles Primitive vs Reference Types(Non-Primitive )

- In JavaScript, data types are categorized into primitive types and reference types, and they behave differently in memory and function calls.

# What Are Primitive Types?

- Primitive types are immutable (cannot be changed) and are store value in the stack memory.
- Primitive types does't have methods.

1. number (typeof number is number)
   eg: let num = 74374

2. string (typeof string is string)
   eg: let name = 'mosam'

3. boolean -- true/false
   eg: let isloggedIn = true

4. null -> it means nothing (typeof null is object)
   eg: let age = null

5. -- undefined -> it has two meaning (typeof undefined is undefined)
   -- when we just declare a varible and didn't assign any value to it, then at runtime Js assign value as undefined
   eg: let name;
   -- we can assign a variable with the value of undefined
   eg: let name = undefined

6. -- bigint -- to assign large value (1343n)

7. -- symbol -- to make a value unique
   eg: const id = Symbol("939");

# How Are Primitives Stored?

Primitives are stored directly in the stack memory, meaning when you copy a primitive, a new value is created.

# What Are Reference Types?

Reference types are mutable (can be changed) and stored by reference in the heap memory.
Reference types have methods

object -> typeof object is object
array -> typeof array is object
function -> typeof function is function
collection
dates
set
map

# How Are References Stored?

When you assign a reference type, only the reference (memory address) is copied, not the actual value

let obj1 = { name: "Alice" };
let obj2 = obj1; // Both point to the same memory location

obj2.name = "Bob";

console.log(obj1.name); // "Bob" (Changed)
console.log(obj2.name); // "Bob" (Same reference)
