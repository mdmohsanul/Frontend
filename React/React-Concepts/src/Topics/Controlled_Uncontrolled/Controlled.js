import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>Controlled</h1>
      <input type="text" name="" id="" value={name} onChange={handleChange} />
      {/* React keeps track of the input value in state (name) and updates it on every keystroke */}
      <p>You Typed: {name}</p>
    </div>
  );
};

export default Controlled;
