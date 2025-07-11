/* 
By default logical AND and OR doesn't return boolean value.
- We need to explicitely use !! operator if we want boolean value
*/

if (true && true && true && false && true) {
  // if statement will not execute
}

const text1 = "AMOE NCKOKE KKF";
const text2 = "LKXSLXCK CJSCLJCMLDC";

console.log(text2 && text1); // "AMOE NCKOKE KKF"
console.log(!!(text2 && text1)); // true
