import React, { useRef } from "react";

const Uncontrolled = () => {
  const getName = useRef();
  // It is just like we are doing in vanilla JS by selecting the ID
  const handleSubmit = (e) => {
    alert(`You typed: ${getName.current.value}`);
  };
  return (
    <div>
      {/* React doesn't track input value in state you read it only when needed using ref */}
      <h1>Uncontrolled</h1>
      <input type="text" name="" id="" ref={getName} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Uncontrolled;
