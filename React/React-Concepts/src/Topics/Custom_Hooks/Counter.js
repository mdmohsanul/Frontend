import React from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Custom Hook</h1>
      <h3>Value: {value}</h3>
      <button onClick={clickhandler}>+</button>
    </div>
  );
};

export default Counter;
