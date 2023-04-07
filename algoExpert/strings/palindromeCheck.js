/**
Write a function that takes in a non-empty string and that returns a boolean
representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and
backward. Note that single-character strings are palindromes.

Sample Input
string = "abcdcba"

Sample Output
true // it's written the same forward and backward

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input string
 */

const string = "abcdcba";

/**
 * O(n) time | O(n) space
 */
const firstApproach = () => {
  let reversedStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return string === reversedStr;
};

console.log("firstApproach", firstApproach());

/**
 * O(n) time | O(1) space
 */
const secondApproach = () => {
  const n = string.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (string[i] !== string[n - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log("secondApproach", secondApproach());

/**
 * O(n) time | O(1) space
 */
const thirdApproach = () => {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log("thirdApproach", thirdApproach());
