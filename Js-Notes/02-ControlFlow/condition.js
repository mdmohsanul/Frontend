/* 
if statement
if else statement
if else if statement
switch statement
Nullish Coalescing Operator ??

*/
const temp = 41;

if (temp > 50) {
  console.log(`extreme hot: ${temp}℃`);
} else {
  console.log(`Medium hot: ${temp}℃`);
}

//how to write multiple lines in if block without curly braces{}

if (true) console.log("first log"), console.log("second log");

// switch
const month = 3;
switch (month) {
  case 1: {
    console.log("January");
    break;
  }
  case 2: {
    console.log("february");
    break;
  }
  case 3: {
    console.log("february");
    break;
  }
  case 4: {
    console.log("february");
    break;
  }
  default: {
    console.log("this is default value");
  }
}
/* 
if we doesn't write break keyword then if the condition satisfies then it will print all the values after that
*/

// falsy values = false , 0 , ''(empty strings), undefined , null, NaN, BigInt (0n)
// truthy values = '0', 'false', ' ', [], {}, function(){}

const emptyArr = [];
if (emptyArr.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

/* Nullish Coalescing Operator ?? -- undefined , null
 use case : Suppose when we call database to get some data then we didn't get that data directly we can expect two response
               undefined and null then our code behave unusual
            
  In case of Nullish Coalescing operator only undefined and null are falsy values
  it will return the first truthy value
*/

let val1 = 5;
// val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15;
val1 = undefined ?? null ?? 0 ?? false ?? 10 ?? 15;

console.log(val1);
