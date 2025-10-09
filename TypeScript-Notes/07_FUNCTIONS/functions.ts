/* 
-------------functions ----------------------

for declaring a function you have to keep few things in your mind

- check the type of parameter
- how we can pass default parameters
- how to restrict our return data from function

*/


// In this we learn how we can make our parameters static
function addNum(num:number){
    return num +2
}

addNum(5)

function getUpper(val:string){
    return val.toUpperCase()
}

getUpper('hello')

function signUpUser(name:string, email:string,isPaid:boolean){

}
signUpUser('Mohsanul','mohsanukl@gmail',false)

// --------------- how to pass default parameters --------------------------------

let employeData = (name:string,age:number,department:string = 'IT') =>{
   
}

employeData('jane',34)

// ------------- how to restrict our return data from function

function getFullName(firstName:string,lastName:string):string{
    return firstName + lastName
    // return 7
}
getFullName('John','Doe')


// -------------- function with union types ----------------------
//function functionName (parameter:parameterType1 | parameterType2 ): returnType{}

function printInfo (info:string|number):void{
    console.log("info", info)
}
printInfo("Hey")
printInfo(6525)

// function with discriminated Unions

type Type1 ={
    shape:"circle"
}
type Type2 = {
    shape:"rectangle"
}
type Type3 = Type1 & Type2

type Circle = {
    kind:"circle";
    radius:number
}
type Rectangle = {
    kind:"rectangle";
    length:number;
    width:number
}
type Shape = Circle | Rectangle
function getArea(shape:Shape) : number{
if (shape.kind === "circle"){
return Math.PI * shape.radius ** 2
}
return shape.length * shape.width
}
getArea({kind:"circle",radius:10})

// function that converts objects

type Person = {
    name:string;
    age:number
}
type Student = Person & {
studentId:string
}

function convertPersonToStudent(person :Person):Student{
    return {...person ,studentId:"332de"}
}
convertPersonToStudent({name:"Bob",age:30})

// function that converts array(types)

function doubleNumbers(arr:number[]):number[]{
return arr.map((num:number) => num**2 )
}

/*  
so in this type of case where we are checking and expecting returned data as boolean or string so by explicitely 
writing type will not work bcoz we only allow to declare only one type.

So there is another way to do when we expection two different types
            
*/

function getValue(myVal:number){
    if(myVal > 5){
        return true
    }
    return '200 OK'
}


const getHello = (s:string):string => {
    return ''
}

// ------------- using map functions -------------------
 const heros  = ['thor','marvel','eminie']

 heros.map((hero) : string => {
    
    return `hero is ${hero}`
 })

 // --------- there were some case where we don't want to return anything from function
 // so we have to explicitely mention void 

 function consoleError(errMsg:string):void{
    console.log(errMsg)
 }

  // --------- there were some case where we NEVER want to return anything from function
 // so we have to explicitely mention never 

 function handleError(errMsg:string):never{
    throw new Error(errMsg)
 }
export{}
