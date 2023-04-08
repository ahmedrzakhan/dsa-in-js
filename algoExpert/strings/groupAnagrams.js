/**
Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and
"iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

Your function should return a list of anagram groups in no particular order.

Sample Input
words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

Sample Output
[["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

Optimal Space & Time Complexity
O(w * n * log(n)) time | O(wn) space - where w is the number of words and n is the length of the longest word
 */

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];

/**
 * O(n * k log k) time | O(n * k) space
 * The time complexity of the above solution is O(n * k log k), where n is the length of the input array
 * words, and k is the maximum length of any word in the array.

 * The bottleneck of the algorithm is the sorting step, which takes O(k log k) time for each word. Since we
 * sort each word once, the total time complexity is O(n * k log k).

 * The space complexity of the solution is also O(n * k), as we use a hash map to store the anagram groups.
 * In the worst case, each word may be a unique anagram, so we would need to store all n words in the hash
 * map, each with a maximum length of k.
 */
const firstApproach = () => {
  const groups = {};

  // Iterate over each word in the input array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Sort the letters of the word and use it as a key to group anagrams together
    const key = word.split("").sort().join("");

    if (key in groups) {
      groups[key].push(word);
    } else {
      groups[key] = [word];
    }
  }

  // Convert the groups object to an array of arrays and return it
  return Object.values(groups);
};

console.log("firstApproach", firstApproach());

/**
* The intuition behind the solution is to group the anagrams together based on their sorted versions.

* We start by initializing an empty object called groups to store the anagram groups. We then iterate through
* each word in the input array words, and for each word, we sort its letters and use the sorted version as a
* key to group the word with other anagrams.

* If the key already exists in the groups object, we simply add the word to the corresponding anagram group.
* Otherwise, we create a new group with the key and add the word to it.

* Finally, we convert the groups object to an array of arrays using Object.values and return it as the output.
* Since we only care about grouping the anagrams together and not their order within each group, the order of
* the output doesn't matter.
 */
