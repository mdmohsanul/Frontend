// readonly is keyword that prevent us to modify a value
// ? is used to avoid skip a value
// & is used to combine values

type User ={
   readonly _id:string,
    name:string,
    email:string,
    isActive : boolean
    creditCardDetails?: number
}

let myUser : User = {
    _id:'1235',
name: "john",
email:"h@history.com",
isActive:false

}
myUser.email = "test@gmail.com"
// myUser._id = "238"



// use existing type to define a new type

type cardNumber = {
    cardnumber : string
}
type cardDate = {
    carddate : string | number
}

//type cardDetails= cardNumber & cardDate

// if you want to add another object on that type

type cardDetails = cardNumber & cardDate &{
    cvv:number
}

let card : cardDetails ={
    cardnumber:"4545",
    carddate:Date.now(),
    cvv:2890
}
console.log(card)