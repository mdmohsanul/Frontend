/* 
1. Function declaration/statement

- Starts with the function keyword
- Gets hoisted (can be called before it's defined)
- Has a name (greet)
- Stored in memory before execution

2. Function Expression:

- The function is assigned to a variable
- Can be anonymous (no function name)
- Not hoisted (you must define it before calling)
- Only available after the line it’s defined
*/

greet(); // ✅ works even though it's before the definition

function greet() {
  console.log("Hello!");
}

greeting(); // ❌ ReferenceError

const greeting = function () {
  console.log("Hello!");
};

greeting();
