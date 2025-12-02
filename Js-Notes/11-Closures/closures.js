function x() {
  let a = 10;
  function y() {
    console.log(a);
  }

  return y;
}

let z = x();

console.log(z); // function y () {console.log(a)}
// executing 1000 of lines of code
z(); //100


for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 4 4 4

for (var i = 1; i <= 3; i++) {
  ((x) => setTimeout(() => console.log(x), 1000))(i);
}
// 1,2,3 due to closure

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


/* 
Here what happens

Whenever we return a function it remembers where it is created and its lexical scope.
When we return not just the code was return but a closure was return means function along with its lexical scope

*/
