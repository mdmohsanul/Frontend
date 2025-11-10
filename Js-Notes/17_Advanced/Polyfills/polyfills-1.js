// map

Array.prototype.myMap =  function(cb){
    let temp = []
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}

let arr = [2,4,8,9,4]
let res = arr.myMap((num) => num+1 )


// filter 

Array.prototype.myMap =  function(cb){
    let temp = []
    for(let i=0; i<this.length; i++){
        if(cb(this[i],i,this)) temp.push(this[i])
    }
    return temp
}
console.log(res)

// reduce 
 
Array.prototype.myReduce = function(cb,initialValue) {
    let accumulator = initialValue

    for(let i=0; i< this.length; i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i]
    }
    return accumulator
}


