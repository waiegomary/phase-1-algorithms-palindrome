function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  var reverseStr = str.split('').reverse().join('');

  // Check if the original and reversed strings are equal
  return str === reverseStr;
}

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
