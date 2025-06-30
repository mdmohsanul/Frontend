function checkPalindrome(value) {
  if (typeof value === "number") {
    return value < 0
      ? false
      : +value.toString().split("").reverse().join("") === value;
  } else if (typeof value === "string") {
    return value === value.split("").reverse().join("");
  }
}
console.log(checkPalindrome(121));
console.log(checkPalindrome(10));
console.log(checkPalindrome("madam"));
