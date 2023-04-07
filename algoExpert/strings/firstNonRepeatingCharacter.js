/**

Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the
string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

Sample Input
string = "abcdcaf"

Sample Output
output = 1 // The first non-repeating character is "b" and is found at index 1.

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input string
The constant space is because the input string only has lowercase
English-alphabet letters; thus, our hash table will never have more
than 26 character frequencies.
 */

const string = "abcdcaf";

/**
 * O(n^2) time | O(1) space
 */
const firstApproach = () => {
  for (let i = 0; i < string.length; i++) {
    let isRepeated = false;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) {
        isRepeated = true;
        break;
      }
    }
    if (!isRepeated) {
      return i;
    }
  }
  return -1;
};

console.log("firstApproach", firstApproach());

/**
 * O(n) time | O(n) space
 */
const secondApproach = () => {
  /**
   * objects are not guaranteed to preserve the insertion order of key-value pairs
   */
  const charFrequencies = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charFrequencies[char] = charFrequencies[char]
      ? charFrequencies[char] + 1
      : 1;
  }
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charFrequencies[char] === 1) {
      return i;
    }
  }
  return -1;
};

console.log("secondApproach", secondApproach());

/**
 * O(n) time | O(n) space
 */
const thirdApproach = () => {
  const charMap = new Map();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charMap.set(char, charMap.has(char) ? charMap.get(char) + 1 : 1);
  }
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charMap.get(char) === 1) {
      return i;
    }
  }
  return -1;
};

console.log("thirdApproach", thirdApproach());
