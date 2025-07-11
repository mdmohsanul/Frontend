const newArr = [1, 2, 3, 4];

console.log(newArr);

function multiplyBy5(num) {
  return num * 5;
}

console.log(multiplyBy5(4.5));
console.log(multiplyBy5(4.5).toFixed(2));
console.log(multiplyBy5.prototype);

// When you create a function, JavaScript automatically creates a prototype property on that function:
function createItem(item, price) {
  this.item = item;
  this.price = price;
}

createItem.prototype.increment = function () {
  this.price++;
};

createItem.prototype.displayPrice = function () {
  console.log(`Price is ${price}`);
};

const chai = new createItem("chai", 25);
const tea = createItem("tea", 250);

//Even though displayPrice is not directly on chai, it's available through its prototype (createItem.prototype).
chai.displayPrice();

/*  ----------------------------- Prototype chain  -------------------------------------

This is the prototype chain. If a property isn’t found on alice, JavaScript looks on Person.prototype, 
then on Object.prototype, and finally stops at null.

chai --> createItem.prototype --> Object.prototype --> null

*/

// ------------- creating one method to return the actual length of string -----------

let myname = "John         ";

// return the actual length by the removing the spaces

String.prototype.getActualLength = function (str) {
  console.log(`Actual length is ${this.trim().length}`);
};
myname.getActualLength();

/* 
the value of this will be like who is calling the this
this ka matlab jis ne call kiya usi k reference

*/

// ---------------------------------------------------------------------------------------

let arr = ["akshay", "aditya"];

// in console if
arr.__proto__; // will give all the array methods
Array.prototype; // will give all the array methods

arr.__proto__.__proto__; // will return the object proto
Object.prototype; // will return the object proto

arr.__proto__.__proto__.__proto__; // return null

let obj = {
  name: "akshay",
  city: "Delhi",
  getintro: function () {
    console.log(this.name + " " + this.city);
  },
};

let obj2 = {
  name: "Alice",
};
console.log(obj2); // it return {name: "Alice"}
// never do this
obj2.__proto__ = obj;
console.log(obj2); // it return {name: "Alice"} and in prototype chain the obj data was also their so we can access the properties of obj.

//  --------------------------- inheritance ----------------------------

const Teacher = {
  makeVideo: true,
};
const TeachingAssistant = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: Teacher,
};

// modern syntax

Object.setPrototypeOf(TeachingAssistant, Teacher); // TeachingAssistant now can access the properties of Teacher
