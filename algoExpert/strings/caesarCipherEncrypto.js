/**
Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a
function that returns a new string obtained by shifting every letter in the input string by k positions
in the alphabet, where k is the key.
Note that letters should "wrap" around the alphabet; in other words, the letter 'z' shifted by one returns
the letter 'a'.

Sample Input
string = "xyz"
key = 2

Sample Output
"zab"
Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input string
 */

const string = "xyz";

/**
 * O(n) time | O(n) space
 */
const firstApproach = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  key = key % 26;

  for (let i = 0; i < string.length; i++) {
    const oldIndex = alphabet.indexOf(string[i]);
    const newIndex = (oldIndex + key) % 26;
    newString += alphabet[newIndex];
  }

  return newString;
};

console.log("firstApproach", firstApproach());

/**
 * O(n) time | O(n) space
 */
const secondApproach = () => {
  let newString = "";
  key = key % 26;

  for (let i = 0; i < string.length; i++) {
    const asciiCode = string.charCodeAt(i);
    /**
     * keep both uppercase and lowercase in mind
     */
    const shiftedCode = ((asciiCode - 97 + key) % 26) + 97;
    newString += String.fromCharCode(shiftedCode);
  }

  return newString;
};

console.log("secondApproach", secondApproach());

/**
Let's break down the expression ((asciiCode - 97 + key) % 26) + 97 step by step:

asciiCode - 97: This part subtracts 97 from the ASCII code of the lowercase letter, which maps the range a-z to
0-25. For example, the ASCII code of 'a' is 97, so asciiCode - 97 evaluates to 0.

asciiCode - 97 + key: This part adds the key to the shifted index of the character. For example, if the key is 2,
then the shifted index of 'x' would be (23 + 2) % 26 = 25, which corresponds to the letter 'z'.

(asciiCode - 97 + key) % 26: This part wraps the shifted index back around to the range 0-25, which ensures that
the index always corresponds to a valid lowercase letter. For example, if the key is 3 and the character is 'z',
then the shifted index would be (25 + 3) % 26 = 2, which corresponds to the letter 'c'.

((asciiCode - 97 + key) % 26) + 97: This part adds 97 to the wrapped index to map it back to the ASCII code of the
corresponding lowercase letter. For example, if the shifted index is 2, then the ASCII code of the corresponding
letter 'c' is 99, so ((asciiCode - 97 + key) % 26) + 97 evaluates to 99.

This expression allows the program to shift each character in the input string by a given key, wrap the shifted index
back around to the range of valid indices, and map the index back to its corresponding lowercase letter in the ASCII
table. The same expression can be used for uppercase letters by using ASCII codes 65-90 instead of 97-122.
 */
