// arrays are non-primitive or reference type
// arrays are mutable

// const arr1 = new Array(76, 23, 56, 68, 97, 3, 45);

// we store any datatype inside an array
/* const arr2 = [
  78,
  "Mosam",
  false,
  undefined,
  null,
  [23, 65, "code"],
  { name: "javascript", library: "React" },
];
console.log(arr2); */

console.log(typeof arr1); // object

// array methods

const arr = [7, 32, 4, 5, 6, 7, 8];

// push -- add element to last, and it mutates the original array

arr.push(12); //[7, 32, 4, 5, 6, 7, 8, 12]

// pop -- remove the last element of an array,and it mutates the original array

arr.pop(); // [7, 32, 4, 5, 6, 7]

// unshift -- add element to start of an array (drawback: it shift/change the position of all elements of an array)

arr.unshift(9); //[9, 7, 32, 4, 5, 6, 7, 8]

// shift --  remove the first element of an array

console.log(arr.shift());
console.log(arr); //[7, 32, 4, 5, 6, 7, 8]

// includes -- returns true or false if element is present or not

console.log(arr.includes(32)); //true

// indexOf -- if the element is present then it return the index of that element otherwise return -1

console.log(arr.indexOf(8)); //6
console.log(arr.indexOf(10)); //-1 bcoz it is not present

/* 
splice - array.splice(start, deleteCount, item1, item2, ...);

start → Index where changes begin.
deleteCount → Number of elements to remove.
item1, item2, ... → Elements to insert.
*/

//slice and splice  - the main difference between slice and splice is splice modifies or manipulates the original array while
//                          slice doesn't .

console.log(arr.slice(1, 4)); // it give from index 1 to index 3
console.log(arr);
console.log(arr.splice(1, 4)); // it give from index 1 to index 4
console.log(arr);

//------------------------------- merging an array ------------------------------------------------

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcFans = ["superman", "batman", "flash"];

//marvelHeros.push(dcFans); // it is not a better way of merging an array
//console.log(marvelHeros);

//const heros = marvelHeros.concat(dcFans); // it will merge perfectly
//console.log(heros);

// by using spread operator  -- spread all array elements into single element by spreading

const heros = [...marvelHeros, ...dcFans];
console.log(heros);

//-------------------------------------------------------------------------------------------------------

const complex_array = [2, 3, 5, [43, 56, 32, 6, [3, 43, 5, 7, 9]], 46, 7];

console.log(complex_array.flat(Infinity));

//-------------------------------------------------------------------------------------------------------

console.log(Array.isArray("Mosam")); // false

console.log(Array.from(4545)); //[]
// from method converts into an array if it is an iterable objects. eg: string, objects. and if not it returns an empty array[]

console.log(Array.from("Mosam"));
["M", "o", "s", "a", "m"];

console.log(Array.from({ name: "Mosam" })); //[] -- bcoz we have to declare that the array is of key or value of the object

// delete an element of array
