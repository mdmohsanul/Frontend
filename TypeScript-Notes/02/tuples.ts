/* -------------  Tuples  -----------------------

A tuple is an array with fixed length and types.
 */

let student: [string, number, boolean];
student = ["Alice", 25, true]; // ✅ Correct
// user = [25, "Alice", true]; // ❌ Wrong order


//👉 You can also use optional and rest elements:

let rgb: [number, number, number?] = [255, 100]; // last is optional
let coords: [number, ...number[]] = [10, 20, 30, 40]; // rest spread