/* 
any keyword in TypeScript

any - it avoid the strictness of that variable. So it is adviced to not use any

- any is not a special type any is simply like a marker in TypeScript.
- It basically turn off the type checking of that particular value

Disables type checking.
Avoid if possible (can cause runtime errors).

*/

let value: any = 42;
value = "hello";  // ✅ allowed
value = true;     // ✅ allowed


let hero:any

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
