/* 
Interafce - It is used to define the structure(shape) of an object

*/

interface User {
    name:string;
    age:number;
    gender:string;
    address?:string
}

const user : User = {
    name:"Bob",
    age:32,
    gender:"Male"
}

// ------------- using interafce in functions 

function displayPerson(person:User):void{
console.log(person)
}

displayPerson({name:"John",age:23,gender:"Male"})

// -------- function signature as an interface

interface MathFunction {
    ( a:number,b:number):number
  
}
const add : MathFunction = (a,b) => {
    return a+b
}

interface DoubleFunction{
    (a:number) : number
}

//  in TypeScript, when you're declaring a function using a function declaration, you can't use a type alias directly like this:
// function double:DoubleFunction(a){

// }

const double :DoubleFunction = (a) => a**2

/* 
So, the benefit of using interface or type is we can resuse this in another function where same functinality happens with different
values.
*/