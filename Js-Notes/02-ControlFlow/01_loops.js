/* 
   There are 7 loops in Js

   1 --> for
   2 --> while
   3 --> do while
   4 --> for in
   5 --> for of
   6 --> forEach
   7 --> map,filter,reduce
*/

// for
const num = 10;
for (let i = 0; i < num; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`2 * ${i} = ${i * 2}`);
}
console.log("for loop");

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`Value of i is ${i}`);
}
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`Value of i is ${i}`);
}

/* 
while
*/
const myArr = ["flash", "batman", "superman", "spiderman"];
let init = 0;
while (myArr.length > init) {
  console.log(myArr[init]);
  init++;
}
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score < 5);

//  *** We can loop only on iterable elements such as array , object , string
