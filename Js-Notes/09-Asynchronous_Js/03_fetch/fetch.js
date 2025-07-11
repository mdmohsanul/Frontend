/* 

API -- APIs allow different software applications to communicate with each other, enabling developers to access and 
          retrieve data from various resources

fetch
- the fetch API is used for making network requests HTTP request in browser
- fetch API return a promise.
- fetch() allows you to request resources (like APIs, JSON files, HTML pages, etc.) over the network.

------------ syntax --------------------
fetch(parameter1, parameter2)
fetch(url,options)

parameter1 --  the network call URL
parameter2 -- It is optional , if we want to send some header or method then we can send as an object.

eg -- fetch('https://example.com', {method : 'GET' , body : new FormData()})

options
{
  method:'POST',
  body: JSON.stringify(requestData),
  headers:{
  'Content-Type' : 'application/json'
  }
}
- here requestData is an object containing the data we want to post

*** API only accept string data so we want to convert it through JSON.stringify()
*/

const apiURL = "https://jsonplaceholder.typicode/.com";
fetch();

async function getUsers() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  console.log(data);
}

//getUsers();

fetch("https://randomuser.me/api/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error", err);
  });

async function data() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
data();
