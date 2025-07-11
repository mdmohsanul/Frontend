/* 
Memoization

Memoization is an optimization technique that can used to reduce time-consuming operations by saving previous input to 
something called cache and returning the result from it.

In simple terms if we have to perform some heavy calculations 

*/

// Implementation of memoization

let calc = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (func) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log(cache);
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      //   console.log(result, "hh");
      return result;
    }
  };
};

console.time();
const efficient = memoize(calc); // passing the function as argument which result we want to cache
console.log(efficient(5)); // bcoz we are returning a function
console.timeEnd();

console.time();
console.log(efficient(5)); // bcoz we are returning a function
console.timeEnd();

console.time();
console.log(efficient(5)); // bcoz we are returning a function
console.timeEnd();
