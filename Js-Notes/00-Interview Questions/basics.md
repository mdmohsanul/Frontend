# 1. Is JavaScript a dynamically typed language or a statically typed language?

JavaScript is a dynamically typed language. In a dynamically typed language, variable types are determined at runtime, allowing a variable to hold values of any type without explicit type declarations. This flexibility can make coding more convenient but may also lead to runtime errors if types are not handled appropriately. JavaScript, being dynamically typed, allows variables to change types during execution and accommodates a wide range of data types without explicit type annotations.

# 2. What are the different data types in JavaScript?

- 01-Basics/02_dataTypes

# 3. What are the differences between `let`, `var`, and `const`?

- 13-Scope/var-let-const

# 4. What is the Temporal Dead Zone in JavaScript?

- The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError.

TDZ of a variable declared with let and const starts from the beginning of the scope until it is initialize some values, So if we want to access that variable in between it throws an error.

# 5. What is hoisting in JavaScript?

-

6. What is the difference between 'Pass by Value' and 'Pass by Reference'?
7. What is the difference between `==` and `===` in JavaScript?
8. What are Template Literals and how are they used?
9. Explain the difference between `null` and `undefined`.
10. What is the `typeof` operator in JavaScript?
11. How does `this` behave in different JavaScript contexts?

12. What is the prototype in JavaScript?

    How do you compare Object and Map

13. What is the difference between synchronous and asynchronous code in JavaScript?
14. What are Promises and how do they work?
15. Explain how promises can be chained in JavaScript.
16. What are the differences between `Promise.all()`, `Promise.any()`, `Promise.allSettled()`, and `Promise.race()`?
17. Explain how `async` and `await` work in JavaScript.
18. Implement custom JavaScript promises.
19. Build your own Promise.all.
20. Create a custom Promise.any.
21. Write a custom Promise.race.
22. Implement Promise.allSettled.
23. Add a custom Promise.finally.
24. Promisify async callbacks.
25. Create custom Promise.resolve and Promise.reject.
26. Handle N async tasks in series.
27. Handle N async tasks in parallel.
28. Handle N async tasks in race.

29. Explain the concept of Modules in JavaScript.
30. What is a polyfill in JavaScript?
31. Explain generator functions in JavaScript.

32. How does the Event Loop work in JavaScript?
33. What is a call stack in JavaScript?

34. What is `setTimeout()` in JavaScript?
35. What is `setInterval()` in JavaScript?
36. Implement custom setTimeout.
37. Build a custom setInterval.
38. Write clearAllTimers functionality.
39. Implement auto-retry logic for failed tasks.
40. What is a closure, and how does it work?

41. What is event bubbling in JavaScript?
42. What is event capturing in JavaScript?
43. What is debouncing in JavaScript, and how is it implemented?
44. What is throttling in JavaScript, and what are its benefits?
45. What is CORS (Cross-Origin Resource Sharing)?
46. How does `localStorage` differ from `sessionStorage`?
47. How do you implement memoization in JavaScript?
48. Throttle API calls by batching them.
49. Debounce to limit the rate of calls.
50. Throttle rate-limited functions.
51. Memoize or cache identical API calls.
52. Create reusable async task utilities.

53. What is a module bundler, and how does it work?

54. What are interceptors in JavaScript, and how are they used?

55. What is `eval()` in JavaScript, and why is it considered harmful?
56. What is a `Proxy` in JavaScript, and how is it used?
