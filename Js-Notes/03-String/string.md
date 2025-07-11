## String in javascript is immutable

# What are the different ways to declare a string in JavaScript?

- let str1 = "Hello";
- let str2 = 'Hello';
- let str3 = `Hello`

# How do you access a specific character in a string?

- str[2] or str.charAt(2)

# How do you check if a string contains a specific substring?

- str.includes("word"),
- str.indexOf("word") !== -1

# How do you extract a substring from a string?

- str.slice(2, 5),
- str.substring(2, 5)

# What is the difference between slice(), substring(), and substr()?

# How do you replace a part of a string?

- str.replace("old","new")

# How do you remove spaces from a string?

- str.trim()
- str.trimStart()
- str.trimEnd()

# Methods to convert string to array?

- str.split()
- Array.from(str)

# How do you check if a string starts with or ends with a specific word?

- str.startsWith("Hello")
- str.endsWith("World")

# How do you count the occurrences of a specific character in a string?

let str = "banana";
let count = str.split("a").length - 1; // Output: 3

# How do you repeat a string multiple times?

- "hello".repeat(3) // "hellohellohello"

# How do you pad a string with leading or trailing characters?

- "42".padStart(5, "0") // "00042"

# How do you extract numbers from a string?

let str = "Order #12345";
let numbers = str.match(/\d+/g); // ["12345"]

# How do you escape special characters in a string?

- "This is a \"quote\"."

# How do you check if a string is a palindrome?

- const isPalindrome = (str) => str === str.split("").reverse().join("");

# How do you remove duplicate characters from a string?

- const removeDuplicates = (str) => [...new Set(str)].join("");
