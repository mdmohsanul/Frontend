/* 

1. toString()
2. String() -- converts anything to string (clean and safe)
3. using template literal ``

*/

const num = 123;
console.log(num.toString()); // "123"
console.log((3.14).toString()); // "3.14"
console.log((100).toString(2)); // "1100100" → binary

// ------------------------------------------------------------------

String(123); // "123"
String(3.14); // "3.14"
String(null); // "null"

// ------------------------------------------------------------------

const num2 = 456;
console.log(`${num2}`); // "456"
console.log(num2 + ""); // "456"
