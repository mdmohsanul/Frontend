"use strict";

const myDate = new Date(); //object

console.log(myDate.toLocaleString());

const mycreatedDate = new Date(2023, 0, 2);

//In js month index starts with 0.  eg: 0-Jan, 1-Feb

console.log(mycreatedDate.toLocaleString()); // in US format

console.log(mycreatedDate.toLocaleString("en-In")); // indian format
