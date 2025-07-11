/* 
There are four promise methods

1 - Promise.all
2 - Promise.allSettled
3 - Promise.any
4 - Promise.race

- If we have multiple promises that run in parallel we have to use these Promsie API's
- All these API's accepts an array of promises as an argument

*/
function promiseOne(resolve, reject) {
  const number = 10;
  if (number) {
    resolve("P1 Resolved");
  } else {
    reject("P1 reject");
  }
}
function promiseTwo(resolve, reject) {
  const number = 0;
  if (number) {
    resolve("P2 Resolved");
  } else {
    reject("P2 reject");
  }
}
function promiseThree(resolve, reject) {
  const number = 0;
  if (number) {
    resolve("P3 Resolved");
  } else {
    reject("P3 reject");
  }
}
const p1 = new Promise(promiseOne);
const p2 = new Promise(promiseTwo);
const p3 = new Promise(promiseThree);
/* 
---------------- Promise.all -----------------------

- Promise.all() returns a single promise as the output

It has two scenarios:

1- If all the promise is resolved

Promise.all run all the input promises before it returns a value
Wait for all of them to finish and give array as output

2 - If any of the promise is rejected

As soon as any of the promise got rejected it throws an error and the error is same as the error returned by that promise.
Suppose if we have two promise rejected then the first reject promise error will thrown.

*/
Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

/* 
----------------  Promise.allSettled() ------------------- ES 2020

It helps us to write more efficient asynchronous code as it shows the outcome of all the promises either it is resolved or 
rejected.
It will wait for all the promises to settled and return an array of object with status and value properties.

*/

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

/* 
O/P
[
{status: 'fulfilled', value: 'P1 Resolved'}
{status: 'rejected', reason: 'P2 reject'}
{status: 'rejected', reason: 'P3 reject'}
]
*/

/* 
The difference is Promise.all() will only be successfull if the all the promise will resolved but Promise.allSettled does not
care about the status of the input promises it returns an array of object of resolved and rejected promises.
*/

/* 
--------------------  Promise.race() ----------------------------------

Promise.race() returns a single promise as an output.
It retruns the fastest promise to finish running either it is reolved or rejected.

This means it will return result of the first settled promise either it is resolve or reject.
*/

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

/* 
O/P

P2 reject
*/

/* 
---------------------------  Promise.any() -----------------------------------------

Promise.any() returns the first settled resolved promise in the input array.

This methods waits for any promise in the array to be resolved and would immediately return as the output.
This method is useful for asynchronous operations where the fastest successful promise is all you need.

*/

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

/* 
The difference between Promise.race and Promise.any() is Promise.race() returns the first settled promise either it is 
resolved or not but Promise.any() returns the first settled and resolved promise.
*/
