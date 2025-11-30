/* 
Optional Chaining (?.)
optional chaining is a feature in JavaScript and allows you to access properties of an object or elements of an array 
without having to check whether the  object or array is Null or undefined first. it is presented by the (?) operator 
and can be used to concisely access deeply nested properties without having to write a long chain or if statement to 
check for null or undefined values.

- The main benefit of using optional chaining is if the properties or element is not found it does not stop the execution.

Scenario - If we want a data from a deeply nested object want a data check also 
*/

// -------------- optional chaining with object ----------------------
const obj = {};
if (obj && obj.data && obj.data.person && obj.data.person.name) {
}

// So the problem with above code is this is very repetative

// So to avoid this use use optional chaining
if (obj?.data?.person?.name) {
}

// example
const obj2 = {
  name: "Mosam",
  age: 26,
  address: {
    city: "Bokaro",
    state: "Jharkhand",
  },
};

// trying to access the properties which not defined
//console.log(obj2.address.city.streetName.houseNo); // throws an error
console.log("without using optional chaining");
console.log(obj2?.address?.city?.streetName?.houseNo); // retturn undefined or null
console.log("after using optional chaining");

// ------------------- optional chaining with array --------------------------------

/* 
optional chaining can also be used to access elements of an array in JavaScript. It works in a similar way to
accessing the properties of an object but using the []?. operator instead of ?.
*/

const users = [
  { name: "John", age: 24 },
  { name: "Alice", age: 23 },
  { name: "Bob", age: 32 },
];
// console.log(users[3].name); throws error

console.log(users[3]?.name); // undefined


// ------------- optional chaining with array ----------

const firstItem = user?.friends?.[0];


/* 
----------------- Important points ---------------------
- optional chaining only stops on null and undefined (0,false,"",NaN is valid value)


*/