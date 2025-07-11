/* String -- string is a data type representing a sequence of characters that may consist of letters, numbers, symbols,
               words, or sentences. 
    *** Always use template literals/string interpolation for making a sentance (backtics - ``)

    JavaSvript converts primitive strings to string objects, so that it is possible to use string object methods.
               
*/

// methods

const str = "Hello World";

// -- length -> returns the length
console.log(str.length);

// -- toLowercase()  -> converts all the characters in lowercase

console.log(str.toLowerCase());

// -- toUpperCase()  -> converts all the characters in upperCase

console.log(str.toUpperCase());

/* 
  --------------  .slice() method ------------

syntax:- 
slice(indexStart)
slice(indexStart, indexEnd)

Extracts a portion of a string between startIndex and endIndex and returns a new string, without modifying the original string.
Accepts negative indexes (counts from the end).
If end is omitted, it extracts till the end of the string.

*/

let strSlice = "JavaScript";

console.log(strSlice.slice(0, 4)); // "Java"
console.log(strSlice.slice(4)); // "Script" (till end)
console.log(strSlice.slice(-6)); // "Script" (negative index)
console.log(strSlice.slice(-6, -3)); // "Scr"

/* 
 ------------ .substring() method -----------
 syntax:- 
slice(indexStart)
slice(indexStart, indexEnd)

Works similarly to slice(), but does not support negative indexes.
If start > end, it swaps them automatically.
If end is omitted, it extracts till the end of the string.

*/

let strSubstring = "JavaScript";

console.log(strSubstring.substring(0, 4)); // "Java"
console.log(strSubstring.substring(4)); // "Script"
console.log(strSubstring.substring(4, 2)); // "va" (automatically swaps 2 & 4)
console.log(sstrSubstringtr.substring(-6, 4)); // "Java" (negative is treated as 0)

/* 
 --------  trim() method ---------
 - .trim() -> remove space from start and end
 - .trimStart() -> remove spaces from start
 - .trinEnd() -> remove spaces from end

*/

const strTrim = "          trimed       ";
console.log(strTrim.trim()); // trimed
console.log(strTrim.trimStart()); // 'trimed        '
console.log(strTrim.trimEnd()); // '       trimed'

/* 
 --------- split() method ------------

split("") converts a string into an array of individual characters by splitting it at each character.
Does not handle Unicode surrogate pairs correctly (e.g., emojis or special characters).
Returns a new array with string characters

*/

let strSplit = "Hello";
console.log(strSplit.split("")); // ["H", "e", "l", "l", "o"]

let emojiStr = "😊👍";
console.log(emojiStr.split("")); // ["😊", "👍"] (✅ Works fine)

let complexStr = "𝒜𝒷𝒸";
console.log(complexStr.split(""));
// ["\ud835", "\udc9c", "\ud835", "\udc9f", "\ud835", "\udc9c"] (❌ Incorrect splitting)

/* 
---------  Array.from() method -------------

Array.from(str) also converts a string into an array of characters.
Handles Unicode characters and emojis correctly (does not break multi-byte characters).
Can apply transformations via a mapping function.

*/
let strFrom = "Hello";
console.log(Array.from(strFrom)); // ["H", "e", "l", "l", "o"]

// Handles Unicode Correctly:
let complexStrFrom = "𝒜𝒷𝒸";
console.log(Array.from(complexStrFrom)); // ["𝒜", "𝒷", "𝒸"] (✅ Correct splitting)

// Can Transform While Converting:
let doubledChars = Array.from("hello", (char) => char + char);
console.log(doubledChars); // ["hh", "ee", "ll", "ll", "oo"]
