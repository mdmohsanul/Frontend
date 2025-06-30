"use strict";
//-------------functions ----------------------
Object.defineProperty(exports, "__esModule", { value: true });
// In this we learn how we can make our parameters static
function addNum(num) {
    return num + 2;
}
addNum(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('hello');
function signUpUser(name, email, isPaid) {
}
signUpUser('Mohsanul', 'mohsanukl@gmail', false);
// --------------- how to pass default parameters
var employeData = function (name, age, department) {
    if (department === void 0) { department = 'IT'; }
};
employeData('jane', 34);
// ------------- how to restrict our return data from function
function getFullName(firstName, lastName) {
    return firstName + lastName;
    // return 7
}
getFullName('John', 'Doe');
// ---------- so in this type of case where we are checking and expecting returned data as boolean or string so by explicitely 
//             writing type will not work bcoz we only allow to declare only one type
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return '200 OK';
}
