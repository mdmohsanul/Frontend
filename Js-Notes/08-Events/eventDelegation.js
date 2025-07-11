/* 
useCase : Suppose in our ecommerce application we have section where all the categories of our products are listed and 
 by clicking on a particular list I want to navigate to a particular product lists page.
- So I have to write click handler on every list item but when our list is big suppose it is 1000 then 1000 click handler we 
   have to write which makes our code heavy.

- So to solve this issue we use event delegation 
*/

// Example: Handling Click Events on a List
// Imagine we have a dynamic list of items, and we want to handle clicks on each item.

// ❌ Without Event Delegation (Inefficient)
// Here, we're adding event listeners to each <li> element individually.

const categories = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Clicked:", this.textContent);
  });
});

//Issue: If new <li> elements are added dynamically, they won’t have event listeners.

// With Event Delegation (Efficient)
// Instead of attaching listeners to each <li>, we add one listener to the <ul> parent.

document.querySelector(".list").addEventListener("click", function (event) {
  if (event.target.classList.contains("item")) {
    console.log("Clicked:", event.target.textContent);
  }
});
