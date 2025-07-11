import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const Parent = () => {
  console.log("parent render");
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeContext.Provider value={{ count }}>
        <Child count={count} /> {/* May re-render if Parent does */}
        <button onClick={() => setCount(count + 1)}>
          Update Parent {count}
        </button>
      </ThemeContext.Provider>
      <Child2 /> {/* May re-render if Parent does */}
    </>
  );
};

const Child = React.memo(() => {
  const { count } = useContext(ThemeContext);
  console.log("Child re-rendered"); // Re-renders when Parent updates
  return <p>Child Component- {count}</p>;
});
const Child2 = () => {
  console.log("Child2 re-rendered"); // Re-renders when Parent updates
  return (
    <>
      <p>Child2 Component</p>;
    </>
  );
};

export default Parent;
