import React from "react";

const PropsDrilling = () => {
  const user = { name: "Alice", age: 25 };

  return <Parent user={user} />;
};
const Parent = ({ user }) => <Child user={user} />;

const Child = ({ user }) => <GrandChild user={user} />;

const GrandChild = ({ user }) => <p>{user.name}</p>;

export default PropsDrilling;
