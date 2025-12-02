## Hoisting is a Javascript behavior where variable and functions moved to top of the scope at the compilation phase before the code is executed.

# function declarations are hoisted before variable declarations.

## Hoisting in JavaScript is a default behavior of moving declarations to the top and this happens due to the execution context.

## Before execution, code is scanned for variables declaration and for each variables a new property is created in the variable enviroment.

## We can able to access a function declaration or a variable declared with var even before running a single line of code because of the reserving memory at the time of memory allocation phase

# Only the declarations are hoisted and the initializations are not hoisted.

# let and const are also hoisted and assigned with undefined but in different scope not in global space thats why we can't able access it before initialization and that time being is TDZ

## What is TDZ?

- Since when let and const variable is hoisted and till it is initialized with some value the time between that is known as TDZ.

- TDZ of a variable declared with let and const starts from the beginning of the scope until the point where it is defined.

# Why TDZ?

- Make it easier to avoid and catch errors, Accessing variables before initialization or declaration is bad practice and should be avioded.
