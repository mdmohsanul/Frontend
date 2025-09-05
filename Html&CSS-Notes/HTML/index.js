

const obj = {
    name:"John",
    age:26,
    city:"LA"
}
const product={
    name:"Laptop",
    price:65000
}

localStorage.setItem("user" , JSON.stringify(obj))

console.log(JSON.parse(localStorage.getItem("user")))

sessionStorage.setItem("product" , JSON.stringify(product))

console.log(JSON.parse(sessionStorage.getItem("product")))