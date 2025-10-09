/* 
An interface in TypeScript is a way to define the shape of an object — what properties and methods it should have.

Unlike type, interface is mainly used for objects and classes.

- interface defines the structure of objects/classes.
- Supports extension and declaration merging (can add new properties later).
- Often preferred for defining contracts for objects and classes.

*/

interface Product {
  readonly id: number;   // cannot be changed
  name: string;
  price?: number;        // optional
}

const p1: Product = { id: 101, name: "Laptop" };
// p1.id = 200; ❌ Error: id is readonly


// ------------- using interafce in functions 

function displayPerson(product:Product):void{
console.log(product)
}

displayPerson({id:526,name:'Mobile',price:20000})

// -------- function signature as an interface

interface MathFunction {
    ( a:number,b:number):number
  
}
const add : MathFunction = (a,b) => {
    return a+b
}

interface DoubleFunction{
    (a:number) : number
}

//  in TypeScript, when you're declaring a function using a function declaration, you can't use a type alias directly like this:
// function double:DoubleFunction(a){

// }

const double :DoubleFunction = (a) => a**2

/* 
So, the benefit of using interface or type is we can resuse this in another function where same functinality happens with different
values.
*/

// --------------- interface with class

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("Woof!");
  }
}


// -------------------- Extending interfaces --------------------

interface Book {
  author: string;
}

interface Publisher extends Book {
  authorId: number;
}

const auth: Publisher = { author: "Bob", authorId: 101 };
