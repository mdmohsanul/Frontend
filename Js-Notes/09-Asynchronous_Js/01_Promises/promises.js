/* 
Promises
How we used to do thing before promises
How we are handling callbacks after promises

Promises -- The promise object represents the eventual completion or failure of an asynchronous operation

How to create a promise:-

new Promise() takes a function with two arguments: resolve and reject.
You call resolve(value) if the async operation is successful.
You call reject(error) if it fails.
.then() handles the success case.
.catch() handles errors


*/
const cart = ["shoes", "pants", "kurta"];

// By using callbacks
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

// By using promise

// this will return a promise and a promise is nothing but an empty object when we execute our code
const promise = createOrder(cart);

// {data : undefined} -- when program starts
// {data : orderDetails} -- when promise is resolved

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

/* 
**** So by using callbacks we were passing a callback fn to another function.
     but by using promises we are attaching callback fn to a promise object and when the data is filled it automatically call
     the callback function.

*/

function set() {
  setTimeout(() => {
    console.log("This is set timeout");
  }, 1000);
}

set();
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls , network call, cryptography

  setTimeout(() => {
    console.log(`Async task is complete`);
  }, 1000);
});

// console.log(promiseOne);
promiseOne.then(() => {
  console.log("promise consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Chai", email: "chai@example" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Mohsanul" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 3000);
});

promiseFour
  .then((data) => {
    return data.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript" });
    } else {
      reject("Error : Js went wrong");
      //   console.log("hi");
    }
  }, 4000);
});

async function consumeFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumeFive();
