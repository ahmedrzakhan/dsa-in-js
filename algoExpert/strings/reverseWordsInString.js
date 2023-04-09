/**
Write a function that takes in a string of words separated by one or more whitespaces
and returns a string that has these words in reverse order. For example, given the
string "tim is great", your function should return "great is tim".

For this problem, a word can contain special characters, punctuation, and numbers.
The words in the string will be separated by one or more whitespaces, and the reversed
string must contain the same whitespaces as the original string. For example, given
the string "whitespaces 4" you would be expected to return "4 whitespaces".

Note that you're not allowed to use any built-in split or reverse methods/functions.
However, you are allowed to use a built-in join method/function.

Also note that the input string isn't guaranteed to always contain words.

Sample Input
string = "AlgoExpert is the best!"

Sample Output
"best! the is AlgoExpert"

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the string
 */

const string = "AlgoExpert is the best!";

/**
 * O(n) time | O(n) space
 */
const firstApproach = () => {
  let reverse = "";
  let i = string.length - 1;
  let currentWord = "";
  while (i >= 0) {
    const char = string[i];
    if (char === " ") {
      reverse += currentWord + " ";
      currentWord = "";
    } else {
      currentWord = char + currentWord;
    }
    i--;
  }
  return reverse + currentWord;
};

console.log("firstApproach", firstApproach());
