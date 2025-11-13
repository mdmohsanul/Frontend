import React from "react";

const UseCallback = () => {
  return <div>UseCallback</div>;
};

export default UseCallback;

/* 
useCallback Hook used to cache a function definition between re-renders.
The useCallback hook takes two arguments a function and a dependancy array 

fn -- The function value that you want to cache. It can take any arguments and return any values.
    React will return your function back to you during the initial render. On next renders, 
    React will give you the same function again if the dependencies have not changed since the last render. 

dependancies -- he list of all reactive values referenced inside of the fn code. Reactive values include props, state, 
                 and all the variables and functions declared directly inside your component body.
                 ***If you forget the dependency array, useCallback will return a new function every time

Usage : Skipping re-rendering of components 
When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components.

To cache a function between re-renders of your component, wrap its definition into the useCallback Hook

- useCallback hook in React optimizes component performance by avoiding unnecessary re-renders.
- It does this by memoizing callback functions which are  only recreated when their dependencies change.
- This is especially useful for fucntions passes as a props to child components, as it prevents them from re-rendering unless
absolute necessary.
.

eg: Give example of password generator application
*/
