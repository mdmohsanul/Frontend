/* 
select element
How to add content
create new element in DOM
attach element in dom

*** HTMLCollection and NodeList  !== array (It is array like structure but not array, we get only few methods to manipulate node list)
   but we can convert nodelist into array the we can access all methods of array
*/

console.dir(document);

let header = document.querySelector("#main-header");
console.log(header);
header.innerHTML = "hi";
header.style.back;

/* -------------------------- select element --------------------------------

getQuerySelector(h1)  -- return first h1 element in the page

getQuerySelectorAll(h1) -- return all h2 element 

*/
const head = document.querySelectorAll("h1");
console.log(head);

const myUl = document.querySelector("ul");

const myLi = myUl.querySelector("li");

myLi.style.backgroundColor = "green";

const myList = document.querySelectorAll("li");

// myList.style.backgroundColor = "red";  // give error bcoz it is node list

myList[1].style.backgroundColor = "red"; // it is like array so we can select with indexes
myList.forEach((item) => (item.style.backgroundColor = "red"));

//  ------ convert HTMLCollection and NodeList to array -----------
const converted = Array.from(myList);
console.log(converted);

/*  ---------------------  How to add content -------------------------
<p class=title>Lorem ipsum dolor sit amet. <span style='display:none;'>text span</span></p>

const title = document.querySelector('.title')

What is difference between these 3

innerHTML -- title.innerHTML (Lorem ipsum dolor sit amet. <span style='display:none;'>text span</span>)

textContent  -- title.textContent (Lorem ipsum dolor sit amet.)

innerText -- title.innerText  (Lorem ipsum dolor sit amet.text span)

*/

const parent = document.querySelector(".parent");
console.log(parent);
console.log(Array.from(parent.children));

const data = Array.from(parent.children).map((items) => items.innerHTML);
console.log(data);

const dayOne = document.querySelector(".day");
// console.log(dayOne)
// console.log(dayOne.parentElement)
// console.log(dayOne.nextElementSibling)

//it returns tree like structure
console.log(parent.childNodes);

/* ------------------------------   create new element in DOM ----------------

*/

const div = document.createElement("div");

div.className = "main";

div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "generatedTitle");

div.style.backgroundColor = "green";
div.style.padding = "12px";

div.innerText = "Chai aur code";
const addText = document.createTextNode("Chai aur Code");
div.appendChild(addText);
console.log(div);

// Attach an element to dom

document.body.appendChild(div);

//-----------------------------------------------------

function addMovie(movie) {
  const li = document.createElement("li");
  li.innerHTML = `${movie}`;
  const parent = document.querySelector(".parent");
  li.setAttribute("class", parent.children[0].className);
  parent.appendChild(li);
}

addMovie("Jailer");

// but by using innerHTML it will traverse the whole list . So to optimize our code we can do appendChild

function addOptiMovie(movie) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(movie));
  const parent = document.querySelector(".parent");
  li.setAttribute("class", parent.children[0].className);
  parent.appendChild(li);
}

addOptiMovie("Dishoom");

// how to edit elements

const movie1 = document.querySelector("li:nth-child(2");
// const newLi = document.createElement("li");
// newLi.textContent = "Pathan";
movie1.textContent = "Pathan";

//----------------------------------styling properties -------------------------------------------

const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");

el.style.background = "red";
