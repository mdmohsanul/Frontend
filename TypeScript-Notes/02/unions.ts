/* 
Unions

Allow a variable to hold more than one type.

Union type allows a variable, parameter or property that can more than one type of values. It's written using the pipe (|) symbol.

It's saying like "This can be either typeA or typeB"

*/
let score: number | string = 33

score = 252;
score = "5242"
// score = false

type User2 = {
    name:string,
    id:number
}
type Admin = {
    username:string,
    id:number
}
let hitesh : User2 | Admin ={
    name:"mosam",id:892918
}
hitesh = {username :"md",id:8928}

// function accepts multiple value and return multiple values

function getDbId(id:number | string){
    // making some  API calls
    console.log(`Db id is ${id}`)
}
getDbId(3)
getDbId("45")

// suppose in the below code  in the id I want to perform some string operations then I can't

function getDetails(username:number | string){
//    username.toLowerCase() 
if(typeof username === "string"){
  username.toLowerCase() 

}
}
getDetails("john134")
getDetails(52654)

// --------------- union for arrays

const arrayData : number [] = [1,2,5,8]
const arrayData2 : string [] = ["1","2","5","8"]
const arrayData3 : (string | number | object )[] = ["1","2","5",8, {name:"John"}]

// if we want to make our variable value strict means it cannot be changed

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "cabin"  // not allowed