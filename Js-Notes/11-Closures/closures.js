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

/* 
Here what happens

Whenever we return a function it remembers where it is created and its lexical scope.
When we return not just the code was return but a closure was return means function along with its lexical scope

*/
