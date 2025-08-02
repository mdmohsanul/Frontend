/* 
Shallow Copy - A shallow copy duplicates the top level properties of object or array. If the properties is itself an object
then their reference is shared not cloned

*/

// By using spread operator

const original = { name: "Alice", address: { city: "Delhi" } };
const shallow = { ...original };

shallow.name = "Bob";               // Only affects shallow
shallow.address.city = "Mumbai";    // Affects both shallow and original!

console.log(original.address.city); // Output: "Mumbai"

// Using Object.assign()

const shallow = Object.assign({}, original);

// For arrays
const arr = [1, 2, [3, 4]];
const copy = [...arr];

copy[2][0] = 99;
console.log(arr[2][0]); // 99 → shared reference

/* 
Deep Copy - A deep copy duplicates the entire structure, including all nested objects or arrays.
No shared references — changes to the copy do not affect the original.

*/

// Using JSON.parse(JSON.stringify())

const original = { name: "Alice", address: { city: "Delhi" } };
const deep = JSON.parse(JSON.stringify(original));

deep.address.city = "Mumbai";
console.log(original.address.city); // Output: "Delhi"

Limitations:
"Doesn't handle undefined, function, Date, Map, Set, circular references, etc"

// Using structuredClone() (Modern JavaScript)

const deep = structuredClone(original);

"Supports Dates, Maps, Sets, etc."
"Not available in some older browsers or Node versions."


// Using lodash's cloneDeep()

import cloneDeep from 'lodash/cloneDeep';

const deep = cloneDeep(original);
