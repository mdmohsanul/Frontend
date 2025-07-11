"use strict";

/* 
mutable -  that can be changed

In JavaScript non-primitive/ reference types are mutable.

*/

let obj = { name: "Alice", address: { city: "Bokaro" } };

// ----------- How to prevent a object from mutate -------------
// 1-- the issue with Object.freeze method is it will only prevent one level for modifying or updating
//Object.freeze(obj);

function checkObj(param) {
  //param.name = "John";
  param.address.city = "Ranchi";
  return param;
}
// 2 -- structuredClone
//console.log(structuredClone(obj))

console.log(checkObj(obj));
console.log(obj);

// getter - setter

let obt = {
  _name: "JS",
  set name(newName) {
    if (!newName.length) {
      return;
    }
    this._name = newName;
  },
  get name() {
    return this._name;
  },
};

obt.name = "React";
console.log(obt);
