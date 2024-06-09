/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// done

function isAnagram(str1, str2) {
  // Remove all non-alphanumeric characters and convert strings to lower case
  const cleanStr1 = str1.replace(/[^a-z0-9-!]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9-!]/gi, '').toLowerCase();

  // If lengths of cleaned strings are not equal, they cannot be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
      return false;
  }

  // Sort characters of both strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Compare sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
