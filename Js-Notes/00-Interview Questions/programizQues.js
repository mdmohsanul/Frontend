//add two numbers

// const add = (num1,num2) => {
//     const sum = num1+num2;
//     console.log(sum)
// }

// add(3,4)

// if we have to find the sum of n numbers

// const add = (...num) =>{
//     //console.log(num)
//    const sum = num.reduce((acc,curr) => {
//       return acc+ curr;
//    })
       
//        return sum
       
   
// }

// //console.log(add(1,3,5,7,8,4))
//  const cl = add(2,3,6,7,3);
 
//  console.log(typeof cl)

// palindrome

const str = 'maDaM';

const checkPalindrome = (word) => {
    const lower = word.toLowerCase();
    const len = lower.length
    //console.log(Math.floor(len/2))
    for(let i =0 ; i<len/2; i++){
        if (lower[i] !== lower[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
    } 


checkPalindrome(str)