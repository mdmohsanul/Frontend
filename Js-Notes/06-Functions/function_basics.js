/* 
A function is a block of code that performs a special task and we can reuse that block of code as much we want

1 -- Function Declaration / Function Statement
2 -- Function Expressions
3 -- Arrow Function
4 -- Higher Order Functions
5 -- Immediately Invoked Function Expressions
6 -- Anonymous functions
7 -- Callback Functions
*/

//---------------------------Function Declaration / Function Statement -----------------------------------------

function declaration() {
  console.log("This is function declaration and statement");
}

declaration; // this is the reference of that function

//---------------------------------Different ways to call a function ---------------------------------
declaration(); // to execute a function we should use paranthesis
declaration.call();
declaration.apply();
declaration``;

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

const add = addTwoNum("45", "5");
console.log(add); // undefined bcoz when we store the function in a variable and if the function is not returning anything then we get undefined

function subtract(num1, num2) {
  return num1 - num2;
}

const subt = subtract(45, 7);
console.log(subt); // 38 bcoz we are returning something from function

//--------------          check if the argument is passed or not           ----------------

function details(name, ms, sx) {
  if (!name) {
    return "Please enter username";
  }
  return `${name} just logged in.`;
}

const det = details(details.length);
console.log(det);

// ------------------uses of rest parameter -----------------

function calculateCartPrice(...value) {
  //console.log(value); // rest parameter take all the arguments and bind in one array

  return value;
}

console.log(calculateCartPrice(12, 100, 300, 40));

//---------------- passing array and object as argument ------------------------

function passingObject(obj) {
  return `Username: ${obj.username} is logged out at ${obj.loggedOutTime}`;
}

const userData = passingObject({ username: "Mosam", loggedOutTime: 5 });
console.log(userData);

function returnSecondValue(getArr) {
  return getArr[1];
}

const getArray = returnSecondValue([23, 4, 5, 78, 9]);
console.log(getArray);

/* 
-------------------    Default parameters  --------------------

in this what happens we will assign default values to the parameter ,
suppose we call a function without passing the argument then only it will take the default parameter.
in below code if we give default value to b and calling the function with two parameters then it will return NaN
*/

const addNumbers = (a, b = 6, c) => a + b + c;
console.log(addNumbers(3, 5)); // NaN

const addThreeNumbers = (a, b, c = 6) => a + b + c;
console.log(addThreeNumbers(3, 5)); //14



