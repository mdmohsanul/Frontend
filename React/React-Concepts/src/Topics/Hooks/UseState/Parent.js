import { useState } from "react";

const add = () => 10 + 20;

function Parent() {
  const [count, setCount] = useState(0); // Initialize state

  /* 
  If you are passing a function in the initial state always pass as reference or in a callback
  */
  //  ✅ const [initialCount,setInitialCount] = useState(add)
  //  ✅ const [initialCount,setInitialCount] = useState(()=>add())

  //  ❌ const [initialCount,setInitialCount] = useState(())
  //  ❌ const [initialCount,setInitialCount] = useState(()=>add)

  // When managing objects, always spread the previous state to avoid overwriting other properties:
  const [user, setUser] = useState({ name: "John", age: 25 });
  const updateAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  //If managing an array, always return a new array reference:
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: items.length, value: Math.random() },
    ]);
  };

  //State updates in React are asynchronous. If the new state depends on the previous state, use a callback function:
  //setCount((count) => count + 1)
const {data,isLoading} = useFetch(url)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

export default Parent;
