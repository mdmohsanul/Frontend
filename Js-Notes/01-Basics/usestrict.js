"use strict";

/* 
useStrict is a keyword that tells the Js Engine to run the code in strict mode which enforces stricter parsing 
and error handling.

Strict mode helps by:

- Preventing common bugs
- Disallowing some insecure features
- Making JS behave more like other strict languages
- Making future changes to JavaScript safer

Here are few ways to explicitely tell javascript to use strict mode

1 -- Everything inside class is automatically in strict mode.
2 -- When we import a javascript file using type="module" everything under module will be in strict mode
     eg: In react we use type="module" that's why we don't have to write 'use strict'.
3 -- 'use strict' keyword on top of Js file , or inside any function or any local block 
*/

// Reason behind using strict mode

// 1. Pollute Window Scope

// suppose we declare a variable without using let,var or const then it will store in window object in non strict mode.

//undeclared = "my variable";

// in non-strict mode -> "my variable"
// console.log(undeclared);

// in strict mode - undeclared is not defined
// console.log(undeclared);

// 2. Silent when readonly value got changed

let obj = {};
Object.defineProperty(obj, "readOnlyProperty", {
  writable: false,
  value: true,
});
//obj.readOnlyProperty = false;

// in non-strict mode value will not change but also doesn't throw any error
// in strict mode - TypeError: Cannot assign to read only property 'readOnlyProperty' of object '#<Object>'
//console.log(obj.readOnlyProperty);

// 3. Allow duplicate function argument names

// function getDetails(name, age, age) {
//   return `${name} age is ${age}`;
// }

// in non-strict mode it will consider the last parameter
// instrict mode -> SyntaxError: Duplicate parameter name not allowed in this context
//console.log(getDetails("Alice", 24, 32));

// 4. Auto conversion of Number

// if we put 0 infront of any number Js switch it to Octal

// in non-strict mode -> 13
// in strict mode -> SyntaxError: Decimals with leading zeros are not allowed in strict mode.
//console.log(015);

// 5. Silent when primitive value used as non-primitives.

const superHero = "Flash";
//superHero.team = "DC";

// in non-strit mode ->  undefined
// in strict mode -> TypeError: Cannot create property 'team' on string 'Flash'
//console.log(superHero.team);

// 6. Binds window object in every functions

function test() {
  console.log(this);
}

// in non-strict mode
// test(); // window object
// test.call({}); // {}
// new test(); // test {}

// in strict mode
test(); // undefined
test.call({}); // {}
new test(); // test {}

// 7. Overwrites the arguments array bydefault

function sum(num1, num2) {
  num1 = 100;
  const sumWithOverrides = num1 + num2;
  const sumWithArguments = arguments[0] + arguments[1];
  return [sumWithOverrides, sumWithArguments];
}

// in non-strict mode it overrides the the argument object also -> [110,110]
// in strict mode it will not override the argument object -> [110,20]
console.log(sum(10, 10));

// 8. Silent when read only keys are removed

delete Object.prototype;

// in non-strict mode -> TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
console.log(Object.prototype);
