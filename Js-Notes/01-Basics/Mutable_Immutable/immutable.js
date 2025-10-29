/* 
immutable -> something that cannot be changed.

In JavaScript primitives types are immutable means we cannot change it but we can reassign it.

*/
"use strict";

let str = "LS";
// we cannot change it
//str[0] = "M"; // typeerror : cannot assign to read only property

// we can re-assign it
str = "MS";
console.log(str);

function check(num) {
  num = 34; //
  console.log(num);
}
let num = 12;
check(num);
console.log(num);
