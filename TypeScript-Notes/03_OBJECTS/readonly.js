// readonly is keyword that prevent us to modify a value
// ? is used to avoid skip a value
// & is used to combine values
var myUser = {
    _id: '1235',
    name: "john",
    email: "h@history.com",
    isActive: false
};
myUser.email = "test@gmail.com";
var card = {
    cardnumber: "4545",
    carddate: Date.now(),
    cvv: 2890
};
console.log(card);
