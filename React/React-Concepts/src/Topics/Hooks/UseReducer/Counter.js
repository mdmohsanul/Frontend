import React, { useReducer } from "react";

const reducer = (state, action) => {
  //   if (action.type === "INCREMENT") {
  //     return state + 1;
  //   }
  //   if (action.type === "DECREMENT") {
  //     if (state > 0) {
  //       return state - 1;
  //     } else {
  //       return 0;
  //     }
  //   }
  //   if (action.type === "RESET") {
  //     return 0;
  //   }
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      } else {
        return { ...state, count: 0 };
      }

    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
const initialValue = {
  count: 0,
};
const Counter = () => {
  // const [count, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Counter using useReducer</h1>
        <p>{state.count}</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
