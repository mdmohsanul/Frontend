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

useCallback is used for memoizing callbacks to prevent unnecessary re-renders of child components.
It returns a memoized callback function that only changes if one of the dependencies has changed.
It is useful when passing callbacks to child components that rely on reference equality.
It will return a memoized version of the function that only changes if one of the dependencies has changed.

eg: Give example of password generator application
*/
