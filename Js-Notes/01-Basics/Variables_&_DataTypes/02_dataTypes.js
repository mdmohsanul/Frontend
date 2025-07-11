"use strict";

//Javascript is dynamic type language it means we don't have to declare the data type of the variable.

//How we can store the data and how we can access that data in this basis there are two categories of data type.

/* Data Type in Js

Primitive data types
Non-Primitive data types

Primitive data are immutable, which means they cannot be changed. Also, they do not have any methods or properties.

1 -- number  (typeof number is number)
      eg: let num = 74374

2 -- string (typeof string is string)
      eg: let name = 'mosam'

3 -- boolean -- true/false
      eg: let isloggedIn = true

4 -- null -> it means nothing (typeof null is object)
      eg: let age = null

5 -- undefined -> it has two meaning (typeof undefined is undefined)
         -- when we just declare a varible and didn't assign any value to it, then at runtime Js assign value as undefined
             eg: let name;
         -- we can assign a variable with the value of undefined
            eg: let name = undefined

6 -- bigint -- to assign large value

7 -- symbol -- to make a value unique (typeof symbol is symbol)
      eg: const sym = Symbol(value)

*/

// let score = "33";
// console.log(typeof score);
// console.log(typeof score);

// console.log("1" + 2);
// console.log(1 + "2");

/* 
Prefix and postfix increment

in prefix increment (++x) it increment the value and return the value after incrementing
in postfix increment (x++) it increment the value and return the value before incrementing

let x = 2;
console.log(x);

// console.log(x++);
console.log(++x);

console.log(x);

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
*/

console.log("33" > true);

let a = 10;
let b = a; // Copy the value (not the reference)

b = 20;

console.log(a); // 10 (Unchanged)
console.log(b); // 20

/* -----------------symbol example----------------------
 */
const id = Symbol("939");
const id2 = Symbol("939");

console.log(id === id2); //false (bcoz symbol represent an unique value)

/* -----------------------------------------------------------------------------------------------------------
Non-primitive data types or reference types
 
Non-primitive data types are mutable


object -- typeof object is object
array -- typeof array is array
function -- typeof function is function
collection -- 
dates -- typeof date is object
set -- typeof set is object
map -- typeof map is object

*/

// Memory allocation

let score = 88;
let score2 = score; // a copy of score is assigned to score2
score = 76;
score2 = 100;

console.log(score); // it will print 76 because
console.log(score2);

let empdetails = {
  name: "Mosam",
  empId: 8998,
  gender: "male",
};
let empdetails2 = { ...empdetails };
empdetails2.name = "Adil";
console.log(empdetails);
console.log(empdetails2);

// ------------------------ Function Behavior with Primitives vs. References --------------------------

function change(x) {
  x = 20;
}
let num = 10;
change(num);

console.log(num); // 10 (Unchanged)

// Since objects are passed by reference, modifying obj inside the function affects the original.
function changeObj(obj) {
  obj.name = "John";
}

let obj = {
  name: "Bob",
  age: 30,
};

changeObj(obj);
console.log(obj.name);
