import React, { useState } from "react";

const Jsx = () => {
const [value,setValue] = useState("hello")
  return (
    <>
      <h1>{value}</h1>
      <p>Welcome to react</p>
    </>
  );
};

export default Jsx;






/* 
Always try to avoid using conditionals in inside JSX bcoz it makes harder to read and debugging
instead declare a variable and do it.
*/
