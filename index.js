function isPalindrome(word) {
  if (word.length === 0 || word.length === 1) {
    return true;
  } else if (word[0] === word[word.length - 1]) {
    const inner = word.slice(1, -1);
    return isPalindrome(inner);
  } else {
    return false;
  }
}

/* 
  pseudocode
  RACECAR
  base case: if length is zero or one
    return true
  if first element equals last element
    slice off first and last char
    pass in sliced string recursively
  else return false
*/

/*
  The code should compare the first and last letters, and if they're equal,
  continue working towards the middle comparing characters. I can do this by
  passing in a shorter string recursively whenever the first and last chars are equal,
  until I get to a base case of length 0 or 1. If at any point the first and last chars are not equal,
  the function will return false;
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  /* Test cases */
  console.log(`expect ${isPalindrome("kayak")} to be true`);
  console.log(`expect ${isPalindrome("bobbob")} to be true`);
  console.log(`expect ${isPalindrome("rater")} to be false`);

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
