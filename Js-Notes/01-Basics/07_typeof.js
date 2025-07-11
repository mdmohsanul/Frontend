/* 
We can detect primitive or non primitive in Javascript in the following ways:
 
1. Using the operator: typeof
- This operator returns a string indicating the type of a value.
- Primitive types will return their corresponding strings (e.g."number", "string", "boolean").
- Non-primitive types will typically return "object" or "function"


***** typeof null returns "object" even though it's a primitive value.

Using the Object() constructor:

- This constructor creates a new object wrapper for a value.
- If a value is primitive, it will be equal to its object-wrapped version.
- If a value is non-primitive, it won't be equal to its object-wrapped version
*/

let x = {};
let y = typeof x;
console.log(y);
console.log(typeof x);
console.log(typeof y);

// Using the Object() constructor:
console.log(num === Object(num)); //(primitive) output: true
console.log(obj === Object(obj)); // non-primitive   output: false
