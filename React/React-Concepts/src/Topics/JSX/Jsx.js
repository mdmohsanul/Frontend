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
Scenarion: Why we wrap all element in div or react fragments?

We wrap all element in div or fragment because JSX must return a single root element and during compilation React expects 
one React.createElement() call at the top level

return React.createElement("", null, ,
React.createElement("h1", null, "hello")
React.createElement("p", null, "Welcome to react")
)

without <></> or div

return React.createElement("h1", null, "hello") React.createElement("p", null, "Welcome to react") ❌
*/


/* 
Always try to avoid using conditionals in inside JSX bcoz it makes harder to read and debugging
instead declare a variable and do it.
*/
