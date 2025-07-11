// call apply and bind are used to share methods.
// by using call apply and bind we borrow a method/function and override the value of this
//  the value of this can be modified/ override using these methods.

const data = {
  firstName: "John",
  lastName: "Doe",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

const data2 = {
  firstName: "Bob",
  lastName: "Johnson",
};

data.printFullName(); // "John Doe"
data.printFullName.call(data2); // "Bob Johnson"

/* 
first write the object where the method is defined (data), then write the method defination (do not call) after that write 
call, apply, or bind method -> data.printFullName.call();
- the call methods accept arguments also - the first argument is the method for which you want to override the this value
 and the second argument is optional if we want to pass some data which the function needs.
*/

// we can also write function outside the object and use it

function printName(city = "Bangalore", state = "Karnataka") {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      "from " +
      city +
      " state " +
      state
  );
}

printName.call(data, "Bokaro", "Jharkhand");
// if we don't pass the argument then default parameter value will print

printName.call(data2);

function setUserName(username) {
  this.username = username;
}

function createUser(name, email, password) {
  setUserName(name); // it will call the function but doesn't set the value of this
  setUserName.call(this, name);
  this.email = email;
  this.password = password;
}

const chai = createUser("Alice", "alice@gmail.com", 1234);
console.log(chai);

// ---------- apply ------
// the difference between call and apply is the argument that we are passing
// In apply we pass array list as a second argument
printName.apply(data, ["Bokaro", "Jharkhand"]);

// ---------------- bind -----------------------

/* 
It will create a copy of method and bind it to the object and returns a function which can be called later.
But in call and apply we directly call the methods
*/

let print = printName.bind(data, "Bokaro", "Jharkhand");
print();
