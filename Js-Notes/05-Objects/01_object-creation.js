/* 
Different ways to create Object in JavaScript?


Object Literal {} -->	Simple objects // not singleton
new Object()  -->	Dynamic object creation // singelton
Object.create() -->	Prototype-based inheritance
Constructor Function  -->	Creating multiple instances (before ES6)
Class (ES6)	 -->  Modern OOP approach
Factory Function -->	Functional programming

 the object we declare from literal then singleton is not made but when declare with constructor it make singleton 

*/

//  using Object literal -> Best For: Simple, static object

const person = {
  name: "John",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log("Hello!");
  },
};
console.log(person.name); // "John"
person.greet(); // "Hello!"

// Using the new Object() Constructor
// Best For: Situations where you need to create an object dynamically.

const person2 = new Object();
person2.name = "Alice";
person2.age = 25;
person2.greet = function () {
  console.log("Hi there!");
};
console.log(person2.name); // "Alice"

/* 
 Using Object.create() (Prototypal Inheritance
    
- This method allows you to create an object that inherits from another object.
- Best For: Creating objects with a specific prototype.
*/

const parent = {
  greet() {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent);
child.name = "Charlie";
console.log(child.name); // "Charlie"
child.greet(); // "Hello from parent!" (inherits from parent)

/* 
Using Constructor Functions

A constructor function acts like a blueprint for creating multiple objects.
Best For: Creating multiple instances of an object (before ES6 classes).
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("David", 35);
const person2 = new Person("Emma", 28);

console.log(person1.name); // "David"
person2.greet(); // "Hello, my name is Emma"

/* 
Using ES6 Classes (Modern Approach)

JavaScript classes (introduced in ES6) provide a more structured way to create objects.
Best For: Object-oriented programming (OOP) and reusable object blueprints.
*/

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  getDetails() {
    return `${this.brand} - ${this.model}`;
  }
}

const myCar = new Car("Tesla", "Model S");
console.log(myCar.getDetails()); // "Tesla - Model S"
