// maps

const map1 =  new Map()
map1.set("name","ajay")
map1.set(true,1)
map1.set(87,"age")

console.log(map1)
console.log(map1.get(true))
console.log(map1.has('name'))

let arr = [3,3,5,7,8,4,2,5,7,7,1,9,2]

function getUniqueArr(ar){
    let newAr = []
for(let i=0; i<ar.length; i++){
    if(!newAr.includes(ar[i])){
        newAr.push(ar[i])
    }
}

    return newAr
}
console.log(getUniqueArr(arr))