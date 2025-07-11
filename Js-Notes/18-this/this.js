/* 
this keyword always refer the current context
*/

// "use strict";

/* 
******************** (1)  'this' keyword in global space/scope **************************
 - this keyword in gobal scope represent the "global Object".
 - wherever we run js code there is a javascript run time enviroment to execute the js code which is different in browser
   and backend.

- So, in browser global object is window object.
- Inside node js global object is global.
*/
console.log(this); // window object
//--------------------------------------------------------------------------------------------------------------------------

/* 
****************** (2)  this inside a function in strict mode ***********************************
  
 */
function a() {
  console.log(this); // "undefined" in strict mode and "window" in non-strict mode
}

/* 
****************** (2)  this inside a function in non-strict mode ***********************************
  - In non strict mode it refers to window object due to this substitution
 */
function a() {
  console.log(this); // "window"
}
/* 
--------------------   this in non-strict mode(this substitution)  ------------------

- If the value of this keyword is undefined and null then this keyword will be replaced with globalObject in non-strict mode.
*/

// ************************** (3) this value also depend on how the function is called (window) ***********************

a(); // strict-mode = undefined , non strict-mode = window object
window.a(); // strict-mode = window object ,non strict-mode = window object

// **************************** (4) this inside object method ****************************

let jsObj = {
  x: 10,
  y: function () {
    console.log(this);
  },
};

jsObj.y(); // it refers to jsObj because inside method this refers to the object where it is defined.

// **************** (5) this inside an arrow function  ***********************************

let jsObj2 = {
  x: 10,
  y: () => {
    console.log(this); // window
  },
};

jsObj2.y(); // inside arrow function this refers to its enclosing lexical context (means parents or ancestors) (in this case it is jsObj2)

// this inside nested arrow function

let nestedObj = {
  a: 20,
  b: function () {
    const x = () => {
      console.log(this.a);
    };
    x();
  },
};
nestedObj.b();

// this inside DOM

// let name = "Amy";
// function declaration() {
//   let name = "Eva";
//   console.log(this.name);
// }

// declaration();

// const expression = function () {
//   let name = "Diva";
//   console.log("expression : ", this.name);
// };

// expression();

// const arrow = () => {
//   let name = "Liva";
//   console.log("arrow: ", this.name);
// };

// arrow();

const addtwo = (num1, num2) => num1 + num2;

console.log(addtwo(2, 5));

// -------------------- Lexical binding arrow function -------------------------

const obj = {
  name:"Object",
  regularFunction(){
    console.log(`Regular Function: ${this.name}`)

    // Arrow function inherits this from its surrounding scope
    const arrowFunction  = () => {
      console.log(`Arrow Function ${this.name}`)
    }
    arrowFunction()
    // Regular function as callback loses this context
    setTimeout(function()  {
      console.log(`callback Regular ${this.name}`)
    }, 100);

     // Arrow function preserve this context
     setTimeout(() =>  {
      console.log(`callback Regular ${this.name}`)
    }, 100);
  }
}
obj.regularFunction()
"Regular Function: Object"
"Arrow Function: Object"
"Callback Regular: undefined"
"Callback Arrow: Object"
