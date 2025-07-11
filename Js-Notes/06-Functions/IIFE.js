/* ----------------------------- Immediately Invoked function expression --------------------------------
Points to keep in mind while declaring IFFE function

syntax -- ()()

-- we can declare function declaration, expression or arrow function inside round braces.
-- Every line that begins with a (, [, `, or any arithmetic operator, must begin with a semicolon if you want it to be 
   interpreted as its own line ~ Otherwise, it may combine with the previous line by accident. 
   All other line breaks have implicit semicolons.

Where to use IFFE

If there is a file where we write code of database connection and want to execute that code immediately 
after our application runs

To prevent our variable from the global scope variables or declaration.
 */
(function () {
  console.log("iife");
})();

(function chai() {
  console.log("named iife ");
})();

// passing argument
((name) => {
  console.log(`Arrow IFFE ${name}`);
})("hitesh");
