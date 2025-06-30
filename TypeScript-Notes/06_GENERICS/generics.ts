/* 
Generics - generices are a way to create reusable, flexible, and type-safe components (functions,classes,interfaces) 
that can work with any data type without losing type safety

*/

// create a generic function
function identity<T>(val:T):T{
    return val
}
const numResult = identity<number>(30)
const stringResult = identity<string>("Hey")


function findItem<T>(arr:T[],item:T):number{
    const findItem = arr.find(itm => itm === item)
    return findItem === undefined ? -1 : arr.indexOf(findItem)
}
const result = findItem([2,3,5,7],3)