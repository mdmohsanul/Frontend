/* 
Content

1 -- Declaration of object
2 -- Accessing values of object
3 -- Change value of object
4 -- Accessing deeper level values

-----------------------------------------------------------------------------------------------------
 


*/

//declare a symbol data type
const mySym = Symbol("keee");

const details = {
  name: "Mosam",
  "full name": "Md Mohsanul Hoda", // bcoz key is string so we can write in this form
  // syntax to declare a symbol inside an object
  [mySym]: "key1",
  age: 25,
  location: "Bokaro",
  email: "mosam@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// ways to access object data

console.log(details.name);
console.log(details["age"]);
console.log(details["full name"]);
//for  accessing symbol
console.log(details[mySym]);

/* 
Manipulation of objects

- add properties
- update proerties
- delete properties

*/

const user = {
  name: "Alice",
  age: 25,
};

// Adding Properties to an Object

//  Using dot notation
user.country = "USA";

//  Using bracket notation
user["email"] = "alice@example.com";

console.log(user);
/*
{
  name: "Alice",
  age: 25,
  country: "USA",
  email: "alice@example.com"
}
*/

// Updating Properties in an Object

user.age = 30; // Using dot notation
user["country"] = "Canada"; // Using bracket notation

console.log(user);
/*
{
  name: "Alice",
  age: 30,
  country: "Canada",
  email: "alice@example.com"
}
*/

/* 

********** WHILE UPDATING IF A KEY IS NOT THERE JS WILL CREATE IT **************

✔ If the property exists, it will be updated.
✔ If it does not exist, JavaScript will create it.
*/

// Deleting Properties from an Object

delete user.email; // Removes the email property
delete user["country"]; // Removes the country property

console.log(user);
/*
{
  name: "Alice",
  age: 30
}
*/

// The delete operator completely removes the property from the object.

/* 
Object.freeze() and Object.seal()

Both Object.freeze() and Object.seal() restrict modifications to an object, but they have different levels of restrictions.

*/

/* 
Object.freeze() – Fully Immutable Object
Prevents adding, modifying, or deleting properties.
 */
const obj = { name: "Alice", age: 25 };
Object.freeze(obj);

obj.age = 30; // ❌ No effect
obj.city = "New York"; // ❌ No effect
delete obj.name; // ❌ No effect

console.log(obj); // { name: "Alice", age: 25 }

/* 
Object.seal() – Partially Immutable Object
Allows modifying existing properties but prevents adding or deleting properties.
*/

const obj = { name: "Alice", age: 25 };
Object.seal(obj);

obj.age = 30; // ✅ Allowed
obj.city = "New York"; // ❌ Not allowed
delete obj.name; // ❌ Not allowed

console.log(obj); // { name: "Alice", age: 30 }
