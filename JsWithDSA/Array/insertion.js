/* 
Insertion  -  

*/

let el = [10,20,30,50,60]
let newEl = 40
let position = 3
// for (let i = el.length-1; i>=0; i--){
//     if(i >= position){
        
//         el[i+1] = el[i]
//         if(i === position){
//             el[position] = newEl
//         }
//     }
// }
for (let i=0; i>el.length; i++){
    if(i > position){
        el[i] = el[i]
        if(i===position){
            el[position] = newEl
        }
    }
}
console.log(el)