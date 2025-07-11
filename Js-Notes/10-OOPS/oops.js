const user = {
  username: "Mosam",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log(username); //username not defined
    console.log(this.username);
  },
};

// console.log(user["username"]);
// user.getUserDetails();

/* 
It is good when we have to create one object but when we have create n no of user object then it will be nightmare for us.
So then constructor function comes into picture which will give us a new instance.
 */

/* ------------------ constructor function ------------------------ 

constructor function gives a new instance.

const promise1 = new Promise()
const date = new Date()

new is the constructor function
So when we write a new keyword an empty object is created.
Then one constructor function is called due to new keyword and packed all the arguments

Instance -- It gives a new copy, so if you edit or perform some action on it then it will not effect the original one.
*/

function UserDetails(username, logincount, isloggedIn) {
  this.user = username;
  this.login = logincount;
  this.signedIn = isloggedIn;

  return this; // if we comment out return statement then also js will implicitely return the values
}

// const userOne =  UserDetails("Mosam", 6, true);
// const userTwo =  UserDetails("Chai aur Code", 5, false);
// console.log(userOne); // it will override the value bcoz we are refering the same object in the heap memory
// console.log(userTwo);

const userOne = new UserDetails("Mosam", 6, true);
const userTwo = new UserDetails("Chai aur Code", 5, false);
console.log(userOne);
console.log(userTwo);
