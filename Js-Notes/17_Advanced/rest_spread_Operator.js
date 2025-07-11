/* 
Rest Parameter (...rest)

- Used in function parameters to collect multiple arguments into an array.
- Helps handle an unknown number of arguments in functions.

*/

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));

const students = {
  name: "Bob",
  age: 52,
  location: "NY",
};
let { name, ...rest } = students;
console.log(name); //Bob
console.log(rest); //52,NY
/* 
Spread Operator (...spread)

- Used to expand elements of an array or object into individual values.
- Helps with array and object manipulation.
*/

// Example 1: Expanding an Array

const numbers = [1, 2, 3];
console.log(...numbers); // Expands array into separate values

const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const names = ["John", "Bob", "Anna", "Riya"];
const printName = (name1, name2, name3, name4) => {
  console.log(name1 + name2 + name3 + name4);
};

printName(names[0], names[1], names[2], names[3]);
printName(names);
printName(...names);

// Example 2: Copying & Merging Objects

/* 
usecase:
- shallow copy of array and objects
- override objects properties

*/
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, location: "NY" }; // Adds a new property
const changeName = { ...user, name: "Bob" };
console.log(updatedUser);
