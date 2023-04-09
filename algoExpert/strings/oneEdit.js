/**
You're given two strings stringOne and stringTwo. Write a function that determines if these
two strings can be made equal using only one edit.

There are 3 possible edits:

Replace: One character in one string is swapped for a different character.
Add: One character is added at any index in one string.
Remove: One character is removed at any index in one string.
Note that both strings will contain at least one character. If the strings are the same, your
function should return true.

Sample Input
stringOne = "hello"
stringTwo = "hollo"

Sample Output
True // A single replace at index 1 of either string can make the strings equal

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the shorter string
 */

const stringOne = "a",
  stringTwo = "a";

/**
 * O(n + m) time | O(1) space
 */
const firstApproach = () => {
  const [lengthOne, lengthTwo] = [stringOne.length, stringTwo.length];
  if (Math.abs(lengthOne - lengthTwo) > 1) {
    return false;
  }
  for (let i = 0; i < Math.min(lengthOne, lengthTwo); i++) {
    if (stringOne[i] !== stringTwo[i]) {
      if (lengthOne > lengthTwo) {
        return stringOne.substring(i + 1) === stringTwo.substring(i);
      } else if (lengthTwo > lengthOne) {
        return stringOne.substring(i) === stringTwo.substring(i + 1);
      } else {
        return stringOne.substring(i + 1) === stringTwo.substring(i + 1);
      }
    }
  }
  return true;
};

// console.log("firstApproach", firstApproach());

/**
The intuition behind this implementation is to first check if the difference in lengths between
the two input strings is greater than 1. If it is, then it is not possible to make the two strings
equal with only one edit, so the function returns false.

Next, the function iterates over the characters in both strings at the same time, comparing each pair
of characters to see if they are equal. If a pair of characters is not equal, it means that at least
one edit is needed to make the strings equal.

At this point, the function checks the length of the two strings again to determine what type of edit
is needed. If one string is longer than the other, then an "add" or "remove" edit is needed, depending
on which string is longer. The function returns true if the substring of the longer string after the
current index is equal to the substring of the shorter string starting from the current index.

If the two strings are of equal length, then a "replace" edit is needed, and the function returns true
if the substring of both strings after the current index is equal.

Finally, if the loop completes without finding any differences, it means that the two strings are already
equal, and the function returns true.

Overall, the implementation checks all possible cases for making the two strings equal with only one edit,
and returns the appropriate result for each case.
 */

/**
 * O(n) time | O(1) space
 */
const secondApproach = () => {
  let indexOne = 0;
  let indexTwo = 0;
  let editCount = 0;

  while (indexOne < stringOne.length && indexTwo < stringTwo.length) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      editCount++;
      if (editCount > 1) {
        return false;
      }
      if (stringOne.length > stringTwo.length) {
        indexOne++;
      } else if (stringTwo.length > stringOne.length) {
        indexTwo++;
      } else {
        indexOne++;
        indexTwo++;
      }
    } else {
      indexOne++;
      indexTwo++;
    }
  }

  if (indexOne < stringOne.length || indexTwo < stringTwo.length) {
    editCount++;
  }

  return editCount <= 1;
};

console.log("secondApproach", secondApproach());

/**
The intuition behind this implementation is to use two pointers, one for each input string, to traverse
the strings and compare each pair of characters. The editCount variable keeps track of the number of
edits needed to make the two strings equal.

The while loop continues as long as both pointers are within the bounds of their respective strings.
If the characters at the current indices are not equal, it means that an edit is needed to make the
strings equal. The function increments the editCount variable and checks if it is greater than 1,
which indicates that more than one edit is needed and the function should return false.

Next, the function checks the lengths of the two strings to determine what type of edit is needed.
If one string is longer than the other, then an "add" or "remove" edit is needed, and the function
moves the pointer for the longer string by one index. If the strings are of equal length, then a
"replace" edit is needed, and the function moves both pointers by one index.

The while loop continues until one of the pointers reaches the end of its respective string. If the
loop completes and one of the pointers is still within its string, it means that an additional edit
is needed to make the strings equal.

Finally, the function returns true if the editCount variable is equal to 1, which indicates that only
one edit is needed to make the strings equal. Otherwise, it returns false.

Overall, the implementation uses a simple and efficient approach that iterates over the strings only
once and keeps track of the number of edits needed to make the strings equal.
 */
