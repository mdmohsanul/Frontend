localStorage.setItem("data from js file", "data");

// how to set data as an object as it only allows to store string
let user = { name: "John Doe" };

// JSON.stringify() to convert it as string
localStorage.setItem("user", JSON.stringify(user));

// JSON.parse() to convert the expected output as object
console.log(localStorage.getItem("user"));
console.log(JSON.parse(localStorage.getItem("user")));
