//Program to find longest word in a given sentence

// const sentence = "which one would you like";
// const sentenceArray = sentence.split(" ");
// const longestWord = sentenceArray.reduce(
//   (acc, curr) => (acc.length > curr.length ? acc : (acc = curr)),
//   sentenceArray[0]
// );
// console.log(longestWord);

// How to check whether a string is palindrome or not (a string that reads the same forward and backward)

// const str = "Level";
// const reverseStr = str.toLowerCase().split("").reverse().join("");
// const checkPalindrome = reverseStr === str.toLowerCase() ? true : false;
// console.log(checkPalindrome);

//Write a program to remove duplicates from an array

// const arr1 = [4, 45, 7, 6, 4, 8, 45, 6];

// const unique = new Set(arr1);
// const uniqueArr = [...unique];
// console.log(uniqueArr);
// const uniqueArr2 = [];
// arr1.forEach((item, index) => {
//   if (!uniqueArr2.includes(item)) {
//     uniqueArr2.push(item);
//   }
// });
// console.log(uniqueArr2);

//Program to find Reverse of a string without using built-in method ?

// const str1 = "LongestWord";

// const reverseStr = "";

// for (let i = str1.length - 1; i >= 0; i--) {
//   reverseStr.push(str1[i]);
// }
// console.log(reverseStr);

const tasks = [
  {
    taskDate: "15/07/2024",
    taskData: [
      {
        taskId: "T001",
        taskName: "Get Groceries from market",
        taskStatus: "Pending",
      },
      {
        taskId: "T002",
        taskName: "Go to Gym",
        taskStatus: "Completed",
      },
      {
        taskId: "T003",
        taskName: "Water the Plants",
        taskStatus: "Completed",
      },
    ],
  },
  {
    taskDate: "16/07/2024",
    taskData: [
      {
        taskId: "T004",
        taskName: "Go to the Park",
        taskStatus: "Completed",
      },
      {
        taskId: "T005",
        taskName: "Get my room cleaned",
        taskStatus: "Pending",
      },
    ],
  },
];
const findDate = "16/07/2024";
console.log(tasks[0]);
