### Array

- An array is an object used to store a collection of multiple items under a single variable name.
- Arrays are a special type of object where elements are stored with indexed keys (starting from 0).

Behind the scenes, JavaScript stores arrays as objects with numeric keys.

let arr = ["A", "B"];
console.log(arr);
// {0: "A", 1: "B", length: 2}

# How do you create an array in JavaScript?

- let arr = [1,2,3]

# What are the different ways to iterate over an array?

- for loop, for of, map, forEach

# How do you check if a variable is an array?

- Array.isArray() -> if it is an array it returns true otherwise false.

# How do you add and remove elements from an array?

.push() -> adds the specified elements to the end of an array and returns the new length of the array.
.pop() -> remove the last element of an array and returns the new length of the array.
.shift() -> remove the first element of an array
.unshift() -> add element to start of an array (drawback: it shift/change the position of all elements of an array)
.splice() ->The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

# How do you copy an array?

[...arr], arr.slice(), Array.from(arr), arr.map(x => x)

# What is the difference between splice() and slice()?

- splice() modifies the original array, slice() returns a new array.

# How do you find the index of an element in an array?

- .indexOf(value), .findIndex(callback)

# How do you remove duplicates from an array?

- let uniqueArr = [...new Set(arr)];

# How do you merge two arrays?

- [...arr1, ...arr2], arr1.concat(arr2)

# How do you find if an array includes a value?

- .includes(value), .some(callback)

# How do you sort an array of numbers correctly?

arr.sort((a, b) => a - b); // Ascending
arr.sort((a, b) => b - a); // Descending

# How do you reverse an array?

- .reverse()

# How do you flatten a nested array?

- arr.flat(Infinity);

# What is the difference between .find() and .filter()?

- .find() returns the first matching element, .filter() returns all matching elements.

# How do you shuffle an array randomly?

- arr.sort(() => Math.random() - 0.5);

# What is the difference between .some() and .every()?

- .some() checks if at least one item meets the condition, .every() checks if all items meet the condition.

# How do you remove a specific item from an array?

- arr = arr.filter(item => item !== valueToRemove);

# How do you transform an array into an object?

- let obj = arr.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
  }, {});

# How do you implement a deep clone of an array?

- let deepClone = JSON.parse(JSON.stringify(arr));

# Methods that don't mutate the original array

Method Action
map() Transforms each element and returns a new array
filter() Returns a new array with elements that meet a condition
reduce() Reduces the array to a single value
concat() Merges arrays without changing the original
slice() Extracts part of an array into a new array
find() Returns the first matching element
findIndex() Returns the index of the first matching element
indexOf() Finds the index of an element
includes() Checks if an element exists in an array
join() Converts an array into a string
toSorted() Returns a sorted copy of the array
toReversed() Returns a reversed copy of the array

# Methods that mutate the original array

Method Action
push() Adds elements to the end
pop() Removes the last element
shift() Removes the first element
unshift() Adds elements to the beginning
splice() Adds, removes, or replaces elements at any position
sort() Sorts the array in place
reverse() Reverses the array in place
fill() Replaces elements with a static value
copyWithin() Copies elements within the array
