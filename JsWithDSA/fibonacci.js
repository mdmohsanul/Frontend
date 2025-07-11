"use strict";

// Fibonacci Series = 0,1,1,2,3,5,8,13,21,34,55,89
// fibonaci number starts with 0 and 1 after that the third number is sum of first two number and goes on

function isFibonacci(num) {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
  return arr[num];
}

console.log(isFibonacci(5));

// using recursion

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(3));
