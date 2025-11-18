import React from 'react'



const Event = () => {
    function handleButtonClick(e){
 console.log(e)
 console.log(e.target)
    } 


    // use when you want custom arguments with optimization
    const handler = (name) => (event) => {
    console.log("Event target:", event.target);
    alert(`Hello ${name}`);
  };
  return (
    <>

    {/* Ways to write onclick handler */}

   {/* Best / Most Optimized (no new function created) , resuse the handler */}
    <button onClick={handleButtonClick}>Click Me</button>

    {/* you have to pass the event object */}
    <button onClick={() => handleButtonClick(e)}>Click Me</button>

    {/* If you want e object and some custom arguments then */}
    
 <button onClick={handler("Hoda")}>Click</button>
    </>



  )
}

export default Event

/* 
In react event handlers recieve the event object as an argument by default.
However, when you use an arrow function directly in the onClick attribute without
passing the event explicitely, react doesn't pass the event object to your handler
function. This is because the arrow function creates a new function and calls
your handler without passing the argument.

*/