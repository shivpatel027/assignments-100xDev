/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Check if the cleaned string is the same as the reversed string
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
