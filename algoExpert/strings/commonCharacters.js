/**
Write a function that takes in a non-empty list of non-empty strings and returns a list of
characters that are common to all strings in the list, ignoring multiplicity.

Note that the strings are not guaranteed to only contain alphanumeric characters. The list
you return can be in any order.

Sample Input
strings = ["abc", "bcd", "cbaccd"]

Sample Output
["b", "c"] // The characters could be ordered differently.

Optimal Space & Time Complexity
O(n * m) time | O(m) space - where n is the number of strings, and m is the length of the longest string
 */

const strings = ["abc", "bcd", "cbaccd"];

/**
 * O(n * m) time | O(c) space - where n is the number of strings, and m is the length of the longest string,
 * c is total number of unique characters across the strings
 */
const firstApproach = () => {
  const charObj = {};
  for (let i = 0; i < strings.length; i++) {
    const charSet = new Set(strings[i]);
    for (const char of charSet) {
      charObj[char] = charObj[char] ? charObj[char] + 1 : 1;
    }
  }
  const result = [];
  for (const [key, value] of Object.entries(charObj)) {
    if (value === strings.length) {
      result.push(key);
    }
  }
  return result;
};

console.log("firstApproach", firstApproach());

/**
 * iterate on all strings
 * add each string to a set
 * iterate on each string to add its chars to object
 * iterate on object to see if its value is equal to length of all strings
 */

const getSmallestString = (strings) => {
  let smallest = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < smallest.length) {
      smallest = strings[i];
    }
  }
  return smallest;
};

/**
 * O(n * m) time | O(m) space, where n is length of strings m is length of the longest string
 */
const secondApproach = () => {
  let result = [];
  let firstString = strings[0]; // use getSmallestString()

  // loop through each character of the first string
  for (let i = 0; i < firstString.length; i++) {
    let char = firstString[i];
    let isCommon = true;

    // check if the character exists in all other strings
    for (let j = 1; j < strings.length; j++) {
      if (strings[j].indexOf(char) === -1) {
        isCommon = false;
        break;
      }
    }

    // add the character to the result list if it's common
    if (isCommon && result.indexOf(char) === -1) {
      // result.indexOf(char) === -1 to see if char is not already present in the result
      result.push(char);
    }
  }

  return result;
};

console.log("secondApproach", secondApproach());

/**
 * take first string
 * iterate over first string to see if each char of the first string is present in all other string
 */
