import React, { useMemo } from "react";

const Saturn = React.memo((props) => {
  console.log("render");
  function calculate() {
    console.log("inside function render");
    return 24 * 54;
  }
  const cacheResult = useMemo(() => calculate(), []);
  return (
    <div>
      <h1>Saturn</h1>
      <p>{props.inputValue}</p>
      <p>{calculate()}</p>
      {/* <p>{cacheResult}</p> */}
    </div>
  );
});

export default Saturn;
