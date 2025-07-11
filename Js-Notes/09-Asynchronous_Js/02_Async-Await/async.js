/* 
Javascript -- 

Synchronous --- line by line execution of code
Single threaded -- all the code will execute in single thread 

In Js we can perform asynchronous code with the help of web API's which is provided by the browser if we run our code on browser
If we run our code on server like node js environment then node js provide thode API's

setTimeout is a web api provided by the browser to perform the async operation
syntax -- setTimeout(handler,timer)

*/
console.log("hiiojeod");

function async() {
  console.log("hi");
}

const change = setTimeout(async, 2000);
console.log("chejh");

document.querySelector("#start").addEventListener("click", () => {
  const interval = setInterval(() => {
    console.log(`Current Date : ${Date.now()}`);
  }, 1000);
  document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(interval);
  });
});

/* 
------------ using async await in promise methods ----------------
*/

async function fetchData() {
  try {
    const [user, posts] = await Promise.all([
      fetch("/api/user"),
      fetch("/api/posts"),
    ]);
    const userData = await user.json();
    const postsData = await posts.json();
    console.log(userData, postsData);
  } catch (err) {
    console.error("Failed to fetch:", err);
  }
}
