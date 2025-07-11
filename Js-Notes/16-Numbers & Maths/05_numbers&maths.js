const num = 473; // return a number

const balance = new Number(100); // return an object

console.log(typeof num); //number
console.log(typeof balance); //object

console.log(balance.toFixed(2)); // 100.00

const otherNo = 123.456;

console.log(otherNo.toPrecision(4));
123.4;

const bigNum = 517342399;

console.log(bigNum.toLocaleString()); // it return in US format

console.log(bigNum.toLocaleString("en-In")); // it return in Indian format

//to convert number to string and then we can perform all the methods of string
console.log(balance.toString());

//++++++++++++++++++++++++++++++++++++---Maths--+++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); //it remove the minus sign from number -- 4

console.log(Math.round(4.9)); // it roundOff the number  -- 5

console.log(Math.ceil(4.2)); // it always roundoff to the top value -- 5

console.log(Math.floor(4.9)); // it always roundoff to the bottom value -- 4

console.log(Math.floor(Math.random() * 6) + 1);

// when we to generate random value between two numbers

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
