// 1. reverse a number.
function reverse(number) {
  if (typeof number === "number") {
    return Number(number.toString().split("").reverse().join(""));
  } else if (typeof number === "string") {
    return number.split("").reverse().join("");
  }
}
// test question 1
console.log(reverse(1234567890));

// 2. string is palindrome or not?
function palindrome(string) {
  const reverseSting = string.split("").reverse().join("");
  return reverseSting === string;
}
// test question 2
console.log(palindrome("helleh"));

// question 3 generates all combinations of a string
function combinationsOfaString(string) {
  list_of_arr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      list_of_arr.push(string.slice(i, j));
    }
  }
  return list_of_arr;
}
// test question 3
console.log(combinationsOfaString("dog"));

// question 4 returns a passed string with letters in alphabetical order.
function orderString(string) {
  return string.split("").sort().join("");
}
// test question 4
console.log(orderString("daegbcf"));

// question 5 Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function capitalALetterInFirstWord(string){
  return string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
// test question 5
console.log(capitalALetterInFirstWord("how are you?"));

// 6 accepts a string as a parameter and find the longest word within the string.

function findLongestWord(string){
  lengthArray = string.split(" ").map(word => word.length);
  return Math.max(...lengthArray);

}
// test question 6
console.log(findLongestWord('Web Development Tutorial'));

//  question 7 count vowels in a given string
function countVowels(string){
  function isVowel(currString){
    const s = currString.toLowerCase();
    if(s === 'a' || s === 'e'|| s === 'i'|| s === 'o'|| s === 'u'){
      return true;
    }
  }
  return string.split("").filter(isVowel).length
}
// test question 7
console.log(countVowels('The quick brown fox'));

// question 8  check the number is prime or not.
function primeChecker(num){
  if(typeof num === 'number' ){
    let s = Math.sqrt(num);
    for (let i = 2; i <= s; i++){
      if(num % i === 0){
        return false;
      }
      return num > 1;
    }
  }
}
console.log(primeChecker(5));

// 9? function which accepts an argument and returns the type.
// function typeChecker(s){
//   return typeof s;
// }
// typeChecker('number');

// 10?  function which returns the n rows by n columns identity matrix.

// 11 take an array of numbers stored and find the second lowest and second greatest number
function findSecondLowestAndGreatestNumber(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return [sortedArr[1], sortedArr[sortedArr.length-2]]
}
// test question 11
console.log(...findSecondLowestAndGreatestNumber([1,2,3,4,5]));

// 13 compute the factors of a positive integer.
function computeFactorsofApositiveInteger(num){
  let arr = [];
  for(let i = 0; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      arr.push(i);
      if (num / i !== i){
        arr.push(num / i);
      }
    }
  }
  return arr.sort((a, b) => a - b);
}
// test question 13
console.log(computeFactorsofApositiveInteger(10));



