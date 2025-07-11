console.log(age);
var age = 30;

// What hoisting does with above code

var age;
console.log(age); //undeined
age = 30;

console.log(a); // reference error - cannot access variable without initialization
let a = 8;

//---------------------------------------------------------------------------------------

print(); // hoisted
function print() {
  console.log("hoisted");
}

// What hoisting does with above code
//print:{function body}

// What happens when we call a function expression or arrow function before declaration
x(); //

var x = function () {
  console.log("expression with var");
};

y(); // reference error: cannot access y before initialization

let y = function () {
  console.log("expression with let");
};
