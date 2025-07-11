/* 
Content 

1-- Check object key is present or not
2 -- Check two objects are equal or not
3 -- Cloning an object
4 -- print keys, values or entries separately
5 -- destructuring
6 -- dynamically creating key and value
7 -- add properties to an object (by using spread opeartor)



// ---------------To check in a object is a key is present or not

let user = {
  name: "Mohsanul",
  age: 25,
};
// first method
const checkKey = user.name !== undefined;
console.log(checkKey);

//second method
const checkKey2 = "name" in user;
console.log(checkKey2); 

// third method
  console.log(user.hasOwnProperty('keyName'))
*/

/* // ------------- to check two objects are equal or not -----------------

const obj1 = { name: "mosam", age: 26 };
const obj2 = { name: "mosam", age: 26 };

//console.log(obj1 === obj2); // It will return false bcoz it just not only check the properties but also check the memory location

// So we have two methods to check if the properties of two objects are same

// by convert object into json
//---const check = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(check);

// -- 2 by using lodash libray
     const _ = require('lodash')
     console.log(_.isEqual(obj1,obj2))
 */

/*  ----------------ways of creating a copy of object-----------------------


1--- Spread operator
let clone = { ...userDetails }

// Object.assign(target, source) Method

let clone = Object.assign({}, userDetails1, userDetails2)
assign method accept two arguments
1 -- {} it is optional, it only confirms that the objects are created in object
2 -- the objects you want to clone

// JSON.parse() Method  --- for deep cloning
let clone = JSON.parse(JSON.stringify(userDetails))
*/
const userDetails = {
  fullName: "Md Mohsanul Hoda",
  age: 34,
  empId: 101,
  baseCity: "Bokaro",
};

const accountDetails = {
  accNo: 4837493,
  branch: "Chas",
};

// let clone = { ...userDetails, ...accountDetails };
// clone.age = 45;
// console.log(userDetails);
// console.log(clone);

// let clone2 = Object.assign({}, userDetails, accountDetails);
// console.log(clone2);

// Object.Assign  also used to update property

console.log(Object.assign(userDetails, { fullName: "Mosam" }));
// -----------------------------------------------------------------------------------------------------

// console.log(Object.keys(userDetails)); // we get keys in the form of array
// console.log(Object.values(userDetails)); // we get values in the form of array
// console.log(Object.entries(userDetails)); // we get separate arrays for every entries where first is key and second is value

// console.log(userDetails.hasOwnProperty("fullName"));

//-----------------------------destructuring ----------------------------

/* 
Points to keep in your mind while destructuring

 -- order doesn't matter while destructuring object
 -- but keyname should be same

*/

const { fullName, age, empId, accNo } = { ...accountDetails, ...userDetails };

console.log(fullName, age, empId, accNo);

// -----------------------------   dynamically creating key and value  -----------------------------

const createKeyValueDynamically = (key, value) => ({ [key]: value });

console.log(createKeyValueDynamically("name", "Avi"));

/* 
-------------------------  add properties to an object (by using spread opeartor)  -------------------------


*/

const obj6 = { name: "Avi", age: 30 };
const addNewProp = { ...obj6, city: "New York" };
