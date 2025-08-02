🔹 Promise Basics
👉 What are the different states of a Promise?
👉 How do you create and resolve a Promise?
👉 What happens if a Promise is resolved and rejected at the same time?

🔹 Chaining & Error Handling
👉 What’s the difference between .then() and .catch()?
👉 How does error propagation work in Promise chains?
👉 What happens if you don’t return anything from a .then()?
👉 How does .finally() behave in different cases?

🔹 Promise Combinators
👉 Difference between Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any()?
👉 Which Promise method is best when you want to wait for the first successful response?
👉 How do you handle rejections inside Promise.all()?

🔹 Async/Await & Event Loop
👉 How does async/await work under the hood?
👉 How does the event loop handle Promises?
👉 Why does await inside a loop behave differently than expected?
👉 How does await affect error handling compared to .then()?

🔹 Tricky Promise Scenarios
👉 What happens if you call await outside an async function?
👉 How do you convert a callback-based function to a Promise-based one?
👉 What’s the difference between a microtask and a macrotask in JavaScript?
👉 How do you cancel a Promise?

# What is promise?

A promise is an object respresenting the eventual completion(or failure) of an asynchronous operations and its resulting value. Promises provided a cleaner way to handle asynchronous operations as compared to callbacks.

whenever we execute promise it returns an object which has two properties
Promise:{
PromiseState:"pending", -> State tells us in which state our promise is
PromiseResult:undefined -> Result will store whatever data promise returned
}
Promises have three states:

- pending -> when we create a promise our promise is in pending state. It means the operation has started but not yet finished.
- fulfilled -> when our operation is success and returns data to the result.
- rejected -> if the promise was not resolved due to some error then it goes to rejected state.

# Pros of using promises

1. Avoid callback hell by chaining .then().
2. Better error handling with catch().

# Cons of using promises

1. Still requires chaining which can get verbose.
2. Not as intuitive as asynchronous code.
