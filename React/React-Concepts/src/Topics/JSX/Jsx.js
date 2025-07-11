import React, { useState } from "react";

const Jsx = () => {
  const [show, setShow] = useState(false);

  const appClassName = show ? "showContent" : "hidecontent";
  const message = show ? "HI" : "BYE";
  return (
    <>
      {/* <div className={`app ${show ? "showContent" : "hidecontent"}`}> */}
      <div className={`app ${appClassName}`}>
        <button onClick={() => setShow(true)}>Click</button>
        {/* <h1>{show ? "HI" : "BYE"}</h1> */}
        <h1>{message}</h1>
      </div>
      ;
    </>
  );
};

export default Jsx;

/* 
Always try to avoid using conditionals in inside JSX bcoz it makes harder to read and debugging
instead declare a variable and 
*/
