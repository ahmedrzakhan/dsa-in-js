/**
 Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

A semordnilap pair is defined as a set of different strings where the reverse of one word is the
same as the forward version of the other. For example, the words "diaper" and "repaid" are a semordnilap
pair, as are the words "palindromes" and "semordnilap".

The order of the returned pairs and the order of the strings within each pair does not matter.

Sample Input
words = ["diaper", "abc", "test", "cba", "repaid"]

Sample Output
[["diaper", "repaid"], ["abc", "cba"]]

Optimal Space & Time Complexity
O(n * m) time | O(n * m) space - where n is the number of words and m is the length of the longest word
 */

// const words = ["diaper", "abc", "test", "cba", "repaid"];
const words = [
  "liver",
  "dog",
  "hello",
  "desserts",
  "evil",
  "test",
  "god",
  "stressed",
  "racecar",
  "palindromes",
  "semordnilap",
  "abcd",
  "live",
];

/**
 * O(n^2*k) space | o(m) space
 * Time Complexity: O(n^2*k), where n is the number of words in the input list, and k is the maximum length
 *  of a word in the input list. This is because the function uses two nested loops over all pairs of words
 * in the input list, and each check for whether a pair is a semordnilap involves reversing and joining a
 * word, which takes O(k) time.
 * Space Complexity: O(m), where m is the total number of semordnilap pairs in the input list. This is because
 * the function uses an array to store the semordnilap pairs found so far, and the number of pairs that can be
 * stored in the array is at most m.
 */
const firstApproach = () => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j].split("").reverse().join("")) {
        result.push([words[i], words[j]]);
      }
    }
  }
  return result;
};

console.log("firstApproach", firstApproach());

/**
 * O(n * k) time | O(n * k) space
 * The time complexity of this optimized approach is O(n * k), where n is the number of words in the input array and
 * k is the maximum length of a word in the array. This is because we iterate through each word in the array once and
 *  perform constant-time operations on each word.
 * The space complexity is also O(n * k), because we store each word in the input array in the set, which can take up to
 * n * k space in the worst case. The result array also takes up space proportional to the number of semordnilap pairs
 * found in the input array. However, the set and result array do not have a one-to-one mapping, so we cannot simply add
 * their sizes together.
 */
const secondApproach = () => {
  const result = [];
  const set = new Set();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversed = word.split("").reverse().join("");
    if (set.has(reversed)) {
      result.push([word, reversed]);
    } else {
      set.add(word);
    }
  }
  return result;
};

console.log("secondApproach", secondApproach());
