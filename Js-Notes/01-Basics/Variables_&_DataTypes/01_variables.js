"use strict"; // treat all js code as newer version

/* 
variables are used to store and manage data values. Think of a variable like a container 
that holds information you can use and change throughout your program.
*/

const accountId = 15625372;
let accountEmail = "mosam@google.com";
var accountPassword = "74387429";
// accountCity = "Jaipur";  Error : bcoz in strict mode we can't declare a variable without using a keyword

// accountId = 779785  we cannot re-assign const variable

accountEmail = "jfhdj@gmail.com";
accountPassword = "66727w";
// accountCity = "Delhi";

let gender = undefined;
console.log(`gender is ${gender}`);

console.table([accountEmail, accountPassword]); // it display values in the form of array
