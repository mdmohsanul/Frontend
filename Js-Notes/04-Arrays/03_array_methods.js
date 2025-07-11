/* 
 Some most used array methods are

  .map()
  .filter()
  .reduce()
  .find()
  .forEach()
  .sort()


*/
const words = ["react", "javascript", "script", "interview", "style"];

// method chaining
const filteredWords = words
  .filter((item) => item.length > 6)
  .map((item) => `Hi ${item}`);

console.log(filteredWords);

console.log(typeof words);

let arr = [1, 2, 3, 4, 5];
const rd = arr.map((num) => (num = 2)); // [2,2,2,2,2]
const rd2 = arr.filter((num) => (num = 2)); // [1, 2, 3, 4, 5]
const rd3 = arr.reduce((num) => (num = 2)); // 2

console.log(rd);
