function isPalindrome(word) {
  // Write your algorithm here
  //check if string is equal to reverse
  return word === word.split('').reverse().join('');
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  .split method splits a string into an array of substrings
  .reverse reverses the word
  .join  method returns an array as a string.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
