/* 
Callback - A callback is a function that is passed as an argument to another function, which is then executed after 
           some operation is completed.
1 - Importance of callback - Callbacks are the way to handling async operations in JavaScript.
2 - Issues with callback
   • Callback Hell - It means a callback inside callback an dmake a deep nested callback which makes our code unmaintanable
                     and un-readable.
   • Inversion of control - We loose control of our program because we pass that callback function into another function and the 
        another function responsibility is toexecute that callback function but we are not aware that whether that fnc will
        ever executr our callback or not

Pros of using callbacks:
1. Simple for use for small tasks
2. Works well for basic asynchronous operations.

Cons of using callbacks:
1. Nested callbacks makes code harder to read and maintain.
2. Error handling becomes difficult.
*/

const cart = ["shoes", "pants", "kurta"];

// nested callback
api.creatOrder(cart, function () {
  //creating order
  api.proceedToPayment(orderTotal, function () {
    // payment completed
    api.showOrder(orders, function () {});
  });
});

function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello World";
    callback(data);
  }, 1000);
}
fetchData((data) => console.log(data));
