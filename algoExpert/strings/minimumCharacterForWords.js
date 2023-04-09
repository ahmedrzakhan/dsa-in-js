/**
Write a function that takes in an array of words and returns the smallest array of characters
 needed to form all of the words. The characters don't need to be in any particular order.

For example, the characters ["y", "r", "o", "u"] are needed to form the words ["your", "you",
"or", "yo"].

Note: the input words won't contain any spaces; however, they might contain punctuation and/or
special characters.

Sample Input
words = ["this", "that", "did", "deed", "them!", "a"]

Sample Output
["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.

Optimal Space & Time Complexity
O(n * l) time | O(c) space - where n is the number of words, l is the length of the longest word,
 and c is the number of unique characters across all words
 */

const words = ["this", "that", "did", "deed", "them!", "a"];

/**
 * O(n * m) time | O(c)  space
 * where n is the number of words in the input array and m is the length of the longest word in the array
 * where c is the number of unique characters in all the words combined
 */
const firstApproach = () => {
  const maxFreq = {};
  for (const word of words) {
    const currFreq = {};
    for (const char of word) {
      currFreq[char] = currFreq[char] ? currFreq[char] + 1 : 1;
      maxFreq[char] = Math.max(currFreq[char], maxFreq[char] || 0);
    }
  }

  const result = [];
  for (const [key, value] of Object.entries(maxFreq)) {
    for (let i = 0; i < value; i++) {
      result.push(key);
    }
  }
  return result;
};

console.log("firstApproach", firstApproach());

/**
Initialize an empty object maxFreq to store the maximum frequency of each character across
all words in the words array.

Iterate over each word in the words array using a for...of loop. For each word, initialize
an empty object currFreq to store the frequency of each character in the word.

Iterate over each char in the word using a nested for...of loop. For each char, check if it
already exists in the currFreq object. If it does not exist, initialize its frequency count
to 0. Then, increment its frequency count by 1.

Update the maximum frequency of the char in the maxFreq object using the Math.max() function.
If the char is not yet present in maxFreq, initialize its frequency count to 0 before taking
the maximum.

Create an empty array result to store the final result.

Iterate over each key-value pair in the maxFreq object using Object.entries(). For each key-value
pair, create a new array of the key repeated value number of times using new Array(value).fill(key).
The fill() method fills each element of the array with the given key value.

Concatenate the arrays for all key-value pairs together into a single array using the spread operator
.... Return the result array.

Overall, the code efficiently calculates the maximum frequency of each character across all words in
the words array and generates the final result by concatenating arrays of each character repeated
value number of times.
 */
