import React from "react";

const Child = ({ user, text }) => {
  user.age = 30; // ❌ Modifying the prop directly (BAD practice)
  return (
    <p>
      {text} {user.name} is {user.age} years old.
    </p>
  );
};

const ChildrenProps = ({ children }) => {
  return (
    <>
      <div style={{ padding: "1rem", background: "red" }}>{children}</div>
    </>
  );
};
const Parent = () => {
  const user = { name: "Alice", age: 25 };

  return (
    <>
      <Child user={user} />
      <p>
        {user.name} is {user.age} years old.
      </p>
      {/* Example of children API */}
      {/* Passing whole component as a props */}
      <ChildrenProps>
        <Child user={user} />
      </ChildrenProps>
      {/* Passing JSX elements */}
      <ChildrenProps>
        <p>
          {user.name} is {user.age} years old.
        </p>
      </ChildrenProps>
    </>
  );
};
export default Parent;
