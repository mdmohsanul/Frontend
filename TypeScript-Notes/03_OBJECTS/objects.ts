const User = {
    name:"Mosam",
    email:"mosam@gmail.com",
    isActive:true
}

function checkUser({name:string,isActive:boolean}){

}

checkUser(User)

// function return an object

function createCourse ():{name:string,isSubscribed:boolean}{

 return ({name:"name",isSubscribed:true})
}

createCourse()


//  type Aliases

type User = {
    name:string,
    email:string,
    isActive:boolean
}
// Type aliases is like creating our own datatype
type Mystring = string
let name:Mystring = "John"

function createUser(user:User):User{
return {name:user.name,email:user.email,isActive:user.isActive}
}
createUser({name:"",email:"",isActive:true})



export {}