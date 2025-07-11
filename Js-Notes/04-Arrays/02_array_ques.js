Given a deeply nested array, write a function that recursively flattens it into a single-level array.

let arr = [
 [1, 2, 3, [5], 6],
 [[6]],
 [6, 6, 8, [5, [6, [7]]]],
 [2, 3]
];

const flatArray = (arrToFlat) => {
 let result = [];
 for (let i = 0; i < arrToFlat.length; i++) {
 if (Array.isArray(arrToFlat[i])) {
 result = result.concat(flatArray(arrToFlat[i])); // Recursively flatten
 } else {
 result.push(arrToFlat[i]);
 }
 }
 return result;
};

console.log(flatArray(arr));
// Output: [1, 2, 3, 5, 6, 6, 6, 6, 8, 5, 6, 7, 2, 3]