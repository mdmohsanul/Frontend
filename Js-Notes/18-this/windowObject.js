/* 
window -- window is actually a global object which is created alongwith the global execution context.

whenever we run javascript program a global execution context is created, a global/window object is created and along with that 
execution context a this variable was created.

** Any code we write inside javascript which is not inside a function is known as global space.
*/

// at the global level
console.log(this === window); //returns true

var a = 10;
function add() {
  var x = 20;
}

console.log(window.a); // 10
console.log(a); // if we don't put anything infront of a it assumes that it is referring to gloabl space so it will print 10
console.log(this.a); // 10
