/* 
Callback function - A callback function is a function that is passed as an argument to another function, 
and it is called (executed) later, usually after some operation is completed.

A callback is the function being passed,
a higher-order function is the one receiving (and using) it.

Real coding example

we are attaching a function to an event listener, So that function is callback function

Real-world analogy:
You order pizza → the shop says:
"When it's ready, we'll call you back."
That “call you back” = callback function. 📞


*/

// 👇 Higher-Order Function
function greet(name, callback) {
  console.log(`Hi, ${name}`);

  // 👇 Callback Function
  callback(); // Calling the passed-in function
}

// 👇 This is a callback function
function sayBye() {
  console.log("Bye!");
}

greet("Alice", sayBye); // Output: Hi, Alice \n Bye!

// Output:
// Hi Alice
// Bye!
