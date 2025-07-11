
// syntax to declare a varaible

// let variableName : type = value

let greetings:string = 'Hello Mohsanul'

console.log(greetings)

//number
let userId : number = 651941
userId

// boolean

let isLogegdIn: boolean = false

// What is type inference

let myNum = 7876

/*  ------------- type inference ------------
Typescript is smart enough that if we declare a variable and assigned a number value then we don't have to explicitely define
the type.
So, In every declaration of variable we don't needed to define the type. Typescript automatically detects.

*/
myNum.toFixed()
/* type inference - the typescript is smart enough to get all the values and if we were assigning immediately we don't need to 
   put colon and declare the type
*/
/* 
any keyword in TypeScript

any - it avoid the strictness of that variable. So it is adviced to not use any

- any is not a special type any is simply like a marker in TypeScript.
- It basically turn off the type checking of that particular value

*/
let hero
function getHero() {
    return "hello"
}
hero = getHero()

// the best code is

let hero2:string
function getHero2() {
    // return false 
    return "hello"
}
hero2 = getHero2() // if we return boolean value than it throws an error saying that hero2 will only accept string
