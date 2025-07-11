import React, { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <h1>Name: {name}</h1>
        <p>Age: 27</p>
        <p>State: Jharkhand</p>
        <p>Contact: @mdmohsanul</p>
      </div>
    </>
  );
};

export default User;

/* 
Behind the scene in functional component also state are placed in big whole object.
Here we are declaring two useState hooks but react is storing in one big object.
*/
