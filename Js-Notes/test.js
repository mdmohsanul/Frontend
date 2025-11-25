let car1 = {
    name:"XC100",
    brand:"mahindra"
}
let car2 = {
    name:"Volvo",
    brand:'volvo'
}
function getCarDetails(color,price){
     console.log(`My car name is ${this.brand} of ${color} and price is ${price}`)
}

Function.prototype.myCall = function(context={},...args){
    if(typeof this !== 'function'){
        throw new Error("its not callable")
    }
    context.fn = this
    context.fn(...args)
}

Function.prototype.myApply = function(context={},args = []){
    if(typeof this !== 'function'){
        throw new Error("its not callable")
    }
    if(!Array.isArray(args)){
        throw new Error("no an array")
    }
    context.fn = this
    context.fn(...args)
}

Function.prototype.myBind = function(context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error("not a function");
    }

    const fn = this;

    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
}


const newFunc = getCarDetails.myBind(car2,"red",5200)
console.log(newFunc())