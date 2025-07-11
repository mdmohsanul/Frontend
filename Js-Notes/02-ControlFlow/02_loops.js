//----------------------------------for of------------------------------------------------

let arr = [1, 2, 3, 4, 5, 6, 7];

for (let num of arr) {
  console.log(num);
}
let greetings = "Hello World";
for (let greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(greet);
}

let language = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift",
};

// for (let key of language) {
//   console.log(key);  // language is not iterable bcoz we cann't directly iterate over object
// }

for (let k in language) {
  console.log(k); //we get key from this
  console.log(language[k]);
}

for (let ar in arr) {
  console.log(ar);
}
