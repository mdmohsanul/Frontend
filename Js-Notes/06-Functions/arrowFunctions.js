/* 
Arrow Functions - Arrow functions are a concise way to write anonymous function expressions in JavaScript. 
They were introduced in (ES6) and are especially useful for short, single-expression functions. 

syntax: const sayHi = () => console.log("Hi!");

If the expression is of single line we don't have to write the return keyword

Points to keep in mind while using Arrow function

-- If curly braces is used {} then we should use return keyword
-- If () round braces used then we dont have to use return keyword
-- If we return something in single line then we don't use any braces or return keyword

*/

const add = (a, b) => a + b;
const getDetails = (obj) => {
  console.log("Student Details");
  return `${obj.name} lives in ${obj.place}`;
};

/* 
When to use Arrow Functions

- You want a shorter syntax
- You don’t need your own this or arguments

Avoid:

- In objects methods (because of this)
- In constructors (you can’t use new with arrow functions)
*/

/* 
No this binding
Arrow functions don’t get their own this. They inherit this from their surrounding scope.
*/
const obj = {
  name: "Leo",
  sayHi: () => {
    console.log(`Hi, I'm ${this.name}`); // 'this' is not obj!
  },
};
obj.sayHi(); // Hi, I'm undefined

// No argument object

const func = () => {
  console.log(arguments); // ReferenceError
};
