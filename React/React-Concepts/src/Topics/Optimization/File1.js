import React, { Suspense, useState } from "react";
import { lazy } from "react";

// Lazy loading a components
const LazyComponent = lazy(() => import("./File2"));

const File1 = () => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    // here the state will mutate depending on the previous value of its state itself
    //setCount(count + 1);

    // here in a callbackfn prev parameter represent the previous value of the state which is 0
    setCount((prev) => prev + 1);
  };
  return (
    <>
      {/* Here the file2 component is very heavy bcoz it loads a employee list which is very heavy
       So, components size depend upon how much libraies we are importing or the no. og lines of code
          and what the component doing or loading which file
     So, If employee list is of 10000 then if we calculate the length it will iterate in the whole array and then give
         the result So it will take time .

         So it will make our app component also slow
         First import our app with lazy loading 
         then bind that component in Suspense Component and give a fallback which is a react component
    
     */}
      <Suspense fallback={<p>This is Loading</p>}>
        <LazyComponent count={count} />
      </Suspense>

      <button onClick={countHandler}>Increment</button>
    </>
  );
};

export default File1;
