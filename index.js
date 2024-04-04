function isPalindrome(word) {
  // Remove spaces and convert to lowercase
  const cleanedWord = word.replace(/\s/g, '').toLowerCase();
  
  // Check if the cleaned word is equal to its reverse
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Remove spaces from the input word and convert it to lowercase.
  2. Check if the cleaned word is equal to its reverse.
  3. If they are equal, return true (the word is a palindrome), otherwise return false.

  Example:
  isPalindrome("racecar")
  Cleaned word: "racecar"
  Reversed word: "racecar"
  Since the cleaned word is equal to its reverse, return true.
*/

// Additional test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
console.log("=>", isPalindrome("A man a plan a canal Panama"));
console.log("=>", isPalindrome("level"));
console.log("=>", isPalindrome("madam"));
console.log("=>", isPalindrome("hello world"));
console.log("=>", isPalindrome("step on no pets"));
console.log("=>", isPalindrome("Was it a car or a cat I saw?"));

module.exports = isPalindrome;
