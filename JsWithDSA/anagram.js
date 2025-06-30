// An anagram is a word or phrase formed by rearranging the letters of a different word or a phrase,
// using all the original letter exactly once.

// input (s = "anagram") , (t = nagaram);  --->>> true
// input (s = "rat") , (t = "cat")    --->  false

const isAnagram = (word1, word2) => {
  let word1Arr = word1.split("").sort().join("");
  let word2Arr = word2.split("").sort().join("");

  return word1Arr === word2Arr ? true : false;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));

function checkAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;
}
