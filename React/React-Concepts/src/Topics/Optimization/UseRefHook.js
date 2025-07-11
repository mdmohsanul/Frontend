import React, { useState, useRef, useEffect } from "react";

/* 
useRef hook gives us the referance of any element in our component

   If we have an input box and we want the userinput then everytime user press a key it will re-render our component.
So instead of using useState we can use useRef hook to track the input changes
 
*/
const UseRefHook = () => {
  // old way which decreases our performances
  const [input, setInput] = useState("");
  // const takeInput = (e) => {
  //   setInput(e.target.value);
  // };

  const inputRef = useRef(null);
  console.log(inputRef);

  // to check either our component is re-rendering or not
  useEffect(() => {
    console.log("re-render");
  });

  return (
    <>
      {/* <input  onChange={takeInput} /> */}
      <input ref={inputRef} />
      <button onClick={() => setInput(inputRef.current.value)}>send</button>
      <h1>Input Value: {input}</h1>
    </>
  );
};

export default UseRefHook;
