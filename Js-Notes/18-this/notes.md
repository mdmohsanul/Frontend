# this is keyword in Js

- whenever we talk about this context it means it will refer the current context
- if we run our js code in browser then this refers to window object / global object
- but if we run in node environment then this refers to empty object

## What is this in javascript

- this refers to the object in the current context

## What is the value of this in global scope?

- Its a global object, its value can be global or window and it also depend on where we run our Js code either in client side
  or server side.

## In non-strict mode what will be the value of this inside a function (expression and declarations)?

- Its a global object
  In non-strict mode, whenever this keyword value is null or undefined, javascript replace it's value with global object.
  (Due to this substitution)

## In strict mode what will be the value of this inside a function?

- In strict mode, the value of this will be undefined

## 𝐈𝐧 𝐬𝐭𝐫𝐢𝐜𝐭 𝐦𝐨𝐝𝐞, 𝐖𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐭𝐡𝐞 𝐯𝐚𝐥𝐮𝐞 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐚 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 ?

𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐱(){
𝐜𝐨𝐧𝐬𝐨𝐥𝐞.𝐥𝐨𝐠(𝐭𝐡𝐢𝐬)
}
In strict mode, the value of this will be undefined.

## 𝐍𝐨𝐰 𝐈𝐧 𝐬𝐭𝐫𝐢𝐜𝐭 𝐦𝐨𝐝𝐞, 𝐈𝐟 𝐢 𝐜𝐚𝐥𝐥 𝐚𝐛𝐨𝐯𝐞 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐮𝐬𝐢𝐧𝐠 𝐰𝐢𝐧𝐝𝐨𝐰.𝐱() 𝐭𝐡𝐞𝐧 𝐰𝐡𝐚𝐭 𝐢𝐬 𝐭𝐡𝐞 𝐫𝐞𝐬𝐮𝐥𝐭 𝐨𝐟 𝐭𝐡𝐢𝐬 ?

𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐱(){
𝐜𝐨𝐧𝐬𝐨𝐥𝐞.𝐥𝐨𝐠(𝐭𝐡𝐢𝐬)
}
𝐰𝐢𝐧𝐝𝐨𝐰.𝐱()
It will log window object.

## 𝐖𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐭𝐡𝐞 𝐯𝐚𝐥𝐮𝐞 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐨𝐛𝐣𝐞𝐜𝐭 𝐦𝐞𝐭𝐡𝐨𝐝 𝐛𝐞𝐥𝐨𝐰 ?

𝐥𝐞𝐭 𝐨𝐛𝐣 = {
𝐱:”𝐇𝐞𝐥𝐥𝐨”,
𝐲: 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧(){
𝐜𝐨𝐧𝐬𝐨𝐥𝐞.𝐥𝐨𝐠(𝐭𝐡𝐢𝐬.𝐱)
}
}

𝐨𝐛𝐣.𝐲()
It will print Hello. Because, When ever we are inside the method, the value of this keyword is the object where this method is present.

## 𝐖𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐭𝐡𝐞 𝐭𝐡𝐢𝐬 𝐯𝐚𝐥𝐮𝐞 𝐢𝐟 𝐢𝐭'𝐬 𝐥𝐨𝐠𝐠𝐞𝐝 𝐢𝐧𝐬𝐢𝐝𝐞 𝐚𝐫𝐫𝐨𝐰 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 ?

𝐥𝐞𝐭 𝐨𝐛𝐣 = {
𝐱:”𝐇𝐞𝐥𝐥𝐨”,
𝐲: ()=>{
𝐜𝐨𝐧𝐬𝐨𝐥𝐞.𝐥𝐨𝐠(𝐭𝐡𝐢𝐬)
}
}

𝐨𝐛𝐣.𝐲()
It will print window object.Because, Arrow function does not have their own this binding. they take the this value of their lexical environment where they are enclosed.

## 𝐖𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐭𝐡𝐢𝐬 𝐯𝐚𝐥𝐮𝐞 𝐢𝐟 𝐢 𝐮𝐬𝐞 𝐢𝐧 𝐛𝐮𝐭𝐭𝐨𝐧 𝐞𝐥𝐞𝐦𝐞𝐧𝐭

<𝐛𝐮𝐭𝐭𝐨𝐧 𝐨𝐧𝐜𝐥𝐢𝐜𝐤="𝐚𝐥𝐞𝐫𝐭(𝐭𝐡𝐢𝐬)">𝐜𝐥𝐢𝐜𝐤</𝐛𝐮𝐭𝐭𝐨𝐧>
It will display [object HTMLElement]

# What is implicit binding?

- When a function is called as a method of an object using dot notations.
- in implicit binding this refers to the object using which the method is invoked

# What is explicit binding?

- in explicit binding we can force method or a function to use a object as its, this reference value.
- explicit binding can be done by using call apply and bind
