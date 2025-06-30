/* 
Intersection types are used to combine multiple types into one, They allow you to create a new type that includes all the properties
and behavior of the intersected types.

This is particularly useful for scenarios where you need to enforce that a value satisfies
ultiple type requirements simultaneously 


- & operator is used
*/

type A = {
    propA:number
}
type B ={
    propB : string
}

type C = A & B

// type Person1={
//    name:String;
//    age:number
// }
// type Student = Person1 & {
//     subjects:string[]
// }
// type Teacher = Person1 & {
//     classes:string[]
// }

