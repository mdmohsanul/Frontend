import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  let x = 10;
  const [y, setY] = useState(10);
  let z = useRef(0);
  let inputRef = useRef();
  const getName = () => {
    console.log(inputRef.current.value);
  };
  console.log(z.current);
  useEffect(() => {
    console.log("useeffect");
  }, []);
  return (
    <>
      <div className="container">
        <h1>Use Ref Hook</h1>
        <div>
          <button
            className="btn"
            onClick={() => {
              x = x + 1;
              console.log(x);
            }}
          >
            Increase X
          </button>
          <span>Let x: {x}</span>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              setY((prev) => prev + 1);
            }}
          >
            Increase Y
          </button>
          <span>State y: {y}</span>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              z.current += 1;
              console.log("ref = " + z.current);
            }}
          >
            Increase Z
          </button>
          <span>Ref z: {z.current}</span>
        </div>
        <input ref={inputRef} type="text" name="" id="" />
        <button onClick={getName}>Get Name</button>
      </div>
    </>
  );
};

export default UseRef;

/* 
When we want some value in a variable but don't want to re-render the component.
and the value being persist between re-renders

let ref = useRef(initialValue)
It returns an object
ref = {
 current:initialValue
}
*/

function MyComponent() {
 const inputRef = useRef(null);
 useEffect(() => {
 inputRef.current.focus();
 }, []);
 return <input ref={inputRef} />;
 }
