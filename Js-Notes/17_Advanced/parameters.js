/* 
so basically in parameters we can pass default parameters 
or we can pass rest parameter which will take unknown number of arguments

*/
/* 
arguments object -> every function have arguments object which is array like object but not actual array we can iterate
                  through for loop or for of loop.
                  
Array.from(arguments) convert it to original array.

arguments is not available in arrow functions.

*/
function greet(){
   console.log(arguments)
}



function greet2(...args){
    // we can use array methods because it is real array
}

// default parameters

function greet3(name="John"){
    
}