const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("handleClick");

// // Example of event bubbling
// // Handler 1
// function grandParenthandler() {
//   console.log("grandParenthandler clicked");
// }

// grandParent.addEventListener("click", grandParenthandler,false);

// // Handler 2
// function parenthandler() {
//   console.log("parenthandler clicked");
// }
// parent.addEventListener("click", parenthandler,false);

// // Handler 3
// function handleClick() {
//   console.log("handleClick clicked");
// }
// child.addEventListener("click", handleClick,false);

/* 
So, In the above code if we click on the child which is button then first
handleclick clicked
parenthandler clicked
grandParenthandler clicked
*/

// Example of event capturing

// Handler 1
// function grandParenthandler() {
//   console.log("grandParenthandler clicked");
// }

// grandParent.addEventListener("click", grandParenthandler, true);

// // Handler 2
// function parenthandler() {
//   console.log("parenthandler clicked");
// }
// parent.addEventListener("click", parenthandler, true);

// // Handler 3
// function handleClick() {
//   console.log("handleClick clicked");
// }
// child.addEventListener("click", handleClick, true);

/* 
So, In the above code if we click on the child which is button then first
grandParenthandler clicked
parenthandler clicked
handleclick clicked

because we pass true as a third parameter so it comes from top to down
*/

// Example of mixed events
// Handler 1
function grandParenthandler() {
  console.log("grandParenthandler clicked");
}

grandParent.addEventListener("click", grandParenthandler, true);

// Handler 2
function parenthandler() {
  console.log("parenthandler clicked");
}
parent.addEventListener("click", parenthandler, false);

// Handler 3
function handleClick() {
  console.log("handleClick clicked");
}
child.addEventListener("click", handleClick, true);

/* 
So, In the above code if we click on the child which is button then first
grandParenthandler clicked
handleclick clicked
parenthandler clicked

So it call the events in this way because we click on the child button and in event propagation cycle first it comes down which
is event trckling so it print like this 
*/
