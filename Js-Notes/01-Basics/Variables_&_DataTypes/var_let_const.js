// let and const are block scoped
// var is functionally or globally scoped
function add() {
  let a = 10;
  const b = 20;
  var c = 30;
  if (1) {
    let a = 400;
    const b = 800;
    var c = 1200;
    console.log("a ", a); // 400
    console.log("b ", b); // 800
    console.log("c ", c); // 1200
  }
  console.log("a ", a); // 10
  console.log("b ", b); // 20
  console.log("c ", c); // 1200 - var is stored in window object so it changes the value of that variable when we re-initialize
}

//add();

// --------------- re-declaration

// var - can be redeclared
// let and const - cannot be re-declared within its scope

var b = 20;
var b = 25;
console.log(b);

let a = 47;
//let c = 52;  // cannot re-declare block scope variable in same block

if (a === 47) {
  let d = 4;
  // let d = 5
}
let d = 5;

// ------  initialization

// var and let - can be declared without initialization.
// const - Must be initialized at the time of declaration

var b;
let g;
// const e;  declaration must be initialized

// ---------------- update - it doesn't means declaration it only change the value

// var and let - can be update
// const - cannot be update

var name = "Ria";
name = "Amit";
let age = 27;
age = 25;
const gender = "female";
//gender = "male"; // assignment to const variable

// ------- trick question

const myData = { name: "Tanay" };
myData.name = "Samy"; // we can update the properties of object but cannot change the object
console.log(myData);

//myData = { name: "John" };
//console.log(myData); // assignment to const variable
