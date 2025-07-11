"use strict";

if (!false) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
}

//global scope

// console.log(a);

// console.log(b);
// console.log(c);

if (1) {
  //block scope
  let x = 9;
}

function scope() {
  // function scope
  let y = 23;
  if (1) {
    console.log(x);
  }
  var x = 45;
}
scope();
var data = 9;
//global scope
function show() {
  console.log(data);
}
