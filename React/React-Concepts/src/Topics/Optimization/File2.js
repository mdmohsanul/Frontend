import React, { useMemo, useEffect } from "react";
import { useCallback } from "react";
import { EmpList } from "../../Data/EmpList";

const File2 = (props) => {
  /* Suppose getLen does a very complex task or heavy calculation which takes time and our props change every time so our
      component also re-renders and it run our function every time our component renders.
      
      So, to run this function only once we shuld memoize it using useMemo hook
  */

  function getLen(arr) {
    console.log("I am Calculating");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count++;
    }
    return count;
  }
  const totalEntries = useMemo(() => getLen(EmpList), []);

  /* Here what happens every time our props changes the component re-render it register a new eventlistener which is not good
    so we will use useEffect , but after using useEffect also it register two times
       bcoz react redner our component two times one i client side another in server side
       and if we talk about about the client side react save our component to provide some optimizations.

    We can use useCallback hook
  */

  const handluOnWindowLoad = useCallback(() => console.log("Loaded"));
  useEffect(() => {
    window.addEventListener("load", handluOnWindowLoad);
    return () => {
      window.removeEventListener("load", handluOnWindowLoad);
    };
  }, []);

  return (
    <>
      <h1>This is a react component</h1>
      <p>Total Entries:{totalEntries}</p>
      <p>Count : {props.count}</p>
    </>
  );
};

export default File2;
