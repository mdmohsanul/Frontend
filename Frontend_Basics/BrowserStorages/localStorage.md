# local storage

// Save data
localStorage.setItem("username", "John");

// Retrieve data
console.log(localStorage.getItem("username")); // "John"

// Remove data
localStorage.removeItem("username");

# suppose if we are storing an object to localStorage then we have to convert our javascript object to JSON string so we use JSON.stringify

# while getting data from localStorage we use JSON.parse() to convert back to JS object.

// Save object
const user = { name: "Alice", loggedIn: true };
localStorage.setItem("user", JSON.stringify(user)); // store as string

// Retrieve object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Alice"
