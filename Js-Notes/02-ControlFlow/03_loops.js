/* 
forEach 
map
filter
reduce
*/

/*   -------------------------------------foreach()--------------------------------------

syntax -- arr.forEach((item,index,arr) => { task })

forEach method doesn't return any value

*/

const coding = ["java", "javascript", "c++", "ruby", "swift", "php", "python"];

// const values = coding.forEach((val) => {
//   console.log(val);
//   return 2 + 2; //undefined
// });

//console.log(values);

/*  --------------------------------  filter() ----------------------------------------

filter method is used to filter out element based on condition
it returns new array
*/

const myNums = [2, 3, 5, 2, 5, 7, 9, 8];
let eachNums = [];

myNums.forEach((item) => {
  if (item > 5) eachNums.push(item);
});
console.log(eachNums);

let newNums = myNums.filter((item) => item > 5);

console.log(newNums);

/* -------------------------------- map() --------------------------------------------------------


*/

const newNum = myNums.map((items) => items + 2);
console.log(newNum);

/* -------------------------------- reduce() --------------------------------------------------------

syntax -- arr.reduce((accumulator,currentvalue) => accumulator + value), initialValue)

accumulator -- at the first iteration if we didn't assign a initial value the by default it will be zero and in second iteration
                it holds the value to first iteration

currentValue -- every element of the itearble object

*/

const reduceNums = myNums.reduce((acc, curr) => {
  console.log(acc);
  return acc * curr;
}, 0);
console.log(reduceNums);

const shoppingcart = [
  {
    itemName: "shirt",
    price: 899,
  },
  {
    itemName: "pant",
    price: "1899",
  },
  {
    itemName: "shorts",
  },
  {
    itemName: "t-shirt",
    price: 499,
  },
  {
    itemName: "jeans",
    price: 2899,
  },
];

const total = shoppingcart.reduce((acc, curr) => {
  return acc + Number(curr.price === undefined ? 0 : curr.price);
}, 0);

console.log(`Total cart value : ${total}`);
