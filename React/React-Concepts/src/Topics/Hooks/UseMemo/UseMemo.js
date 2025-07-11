import React, { useMemo, useState } from "react";
import { findPrime } from "./demo";

const UseMemo = () => {
  const [inputValue, setInputValue] = useState();
  const [darkTheme, setDarkTheme] = useState(false);

  const prime = useMemo(() => {
    console.log("inside function");
    return findPrime(inputValue);
  }, [inputValue]);
  console.log("re-render");
  return (
    <div className={`container ${darkTheme ? "dark" : ""}`}>
      <h1>Use Memo Hook</h1>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "Light" : "Dark"}
      </button>
      <div>
        <input
          type="number"
          name=""
          id=""
          placeholder="Type something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <p>{prime}</p>
    </div>
  );
};

export default UseMemo;

/* 
useMemo Hook used cache the result of a calculation between re-renders.

fn -- The function calculating the value that you want to cache. It should be pure, should take no arguments, 
      and should return a value of any type. React will call your function during the initial render. 
      On next renders, React will return the same value again if the dependencies have not changed since the last render. 

dependencies -- The list of all reactive values referenced inside of the calculateValue code. 
                 Reactive values include props, state, and all the variables and functions declared directly 
                 inside your component body. 

To cache a calculation between re-renders, wrap it in a useMemo call at the top level of your component

eg: give example of a list of items
*/
