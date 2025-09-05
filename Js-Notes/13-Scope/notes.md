# How many types of scopes are there in Js

Scope defines where variables, functions and objects are accessible in your code. It controls the visibility and lifetime of variables.

- Block Scope -> Anything we write inside paranthesis is declared as block scope
  if (1) {
  //block scope
  let x = 9;
  }
- Function Scope
  function scope() {
  // function scope
  let x = 23;
  if (1) {
  console.log(x);
  }
  }

- Global Scope
  var data = 9;
  //global scope
  function show() {
  console.log(data);
  }

- Script Scope
  When we have to script file and wants to access variable from one script file to another then we use script scope.
  <script src='app.js' ></script>
  <script src='app2.js' ></script>

- Module Scope
  When we use external Js file then the variable declared on that module is only accessible on that module only
  <script src='src.js' type='module'></script>
