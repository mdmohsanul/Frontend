/* Readonly

Properties that cannot be reassigned after initialization. */

type Car = {
  readonly brand: string;
  model: string;
};

let car: Car = { brand: "Toyota", model: "Camry" };
car.model = "Corolla";   // ✅ allowed
// car.brand = "Honda";  // ❌ Error: brand is readonly

/* Optional (?)

Properties that may or may not exist. */

type Person = {
  id: number;
  name: string;
  age?: number; // optional
};

let u1: Person = { id: 1, name: "Alice" };         // no age, valid
let u2: Person = { id: 2, name: "Bob", age: 30 }; // with age, valid