1. What is async/await?

- async/await is syntactic sugar over Promises.
- async/await simplifies working with Promises by providing a more readable and concise syntax for asynchronous code
  which improves readability and maintainability.
- it allows you to write asynchronous code that looks and behave like a asynchronous code.

# Pros

1. Cleaner and more readable code
2. Error handling using try/catch
3. Make asynchronous code look synchronous.

# Cons

1. requires understanding of promises.
2. Can lead to blocking behavior if not used carefully.

3. How do you create an async function?

async function fetchData() {
const res = await fetch('https://api.com/data');
const json = await res.json();
return json;
}

# await only works inside async functions (or top-level with ES modules).

3. What happens if you forget await inside an async function?
   Answer: The function still returns a pending promise, and the result is not resolved before continuing.

async function getData() {
const res = fetch('url'); // No await!
console.log(res); // Logs a Promise, not actual data
}

5. Can you use await outside an async function?
   Answer: No, unless you're using a top-level await in an ES module.

// ❌ This will throw error
await fetch('/data');

// ✅ Top-level await works inside ES modules or recent Node versions

4. How do you handle errors with async/await?
   Answer: Using try/catch:

async function getUser() {
try {
const res = await fetch('/api/user');
const data = await res.json();
return data;
} catch (err) {
console.error("Error:", err);
}
}

6. What is the return value of an async function?
   Answer: An async function always returns a Promise, regardless of whether you explicitly return a value.

async function f() {
return 1;
}
f().then(console.log); // Logs 1

7. How do you run multiple async operations in parallel using async/await?
   Answer: Use Promise.all() to run them concurrently:

const [user, posts] = await Promise.all([
fetch('/user').then(res => res.json()),
fetch('/posts').then(res => res.json())
]);

8. What are some pitfalls of async/await?

Not handling errors properly with try/catch

Running async code sequentially when it could be parallel

Forgetting to await a promise

Using await in a loop (slows performance if not parallelized)

10. How would you create a delay using async/await?

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function run() {
console.log("Wait...");
await delay(2000);
console.log("2 seconds later");
}
