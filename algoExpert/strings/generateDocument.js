/**
You're given a string of available characters and a string representing a document that you
need to generate. Write a function that determines if you can generate the document using
the available characters. If you can generate the document, your function should return true;
otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters
string is greater than or equal to the frequency of unique characters in the document string. For
example, if you're given characters = "abcabc" and document = "aabbccc", you cannot generate the
document because you're missing one c.

The document that you need to create may contain any characters, including special characters,
capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

Example

characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"

output = true

Optimal Space & Time Complexity
O(n + m) time | O(c) space - where n is the number of characters, m is the length of the document,
and c is the number of unique characters in the characters string
 */

const characters = "Bste!hetsi ogEAxpelrt x ";
const document = "AlgoExpert is the Best!";

/**
 * O(n + m) time | O(c) space
 */
const firstApproach = () => {
  const charCount = {};
  for (const char of characters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of document) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
  //   const charObj = {};
  //   for (let i = 0; i < characters.length; i++) {
  //     if (charObj[characters[i]]) {
  //       charObj[characters[i]]++;
  //     } else {
  //       charObj[characters[i]] = 1;
  //     }
  //   }

  //   for (let i = 0; i < document.length; i++) {
  //     if (charObj[document[i]]) {
  //       console.log("d");
  //       charObj[document[i]]--;
  //     } else {
  //       return false;
  //     }
  //   }
  //   return true;
};

console.log("firstApproach", firstApproach());

/**
 * O(n * m) time | O(c) space
 */
const secondApproach = () => {
  const charSet = new Set(characters);
  for (let i = 0; i < document.length; i++) {
    const char = document[i];
    if (!charSet.has(char)) {
      return false;
    }
    const charCount = document.split(char).length - 1;
    const availableCharCount = characters.split(char).length - 1;
    if (charCount > availableCharCount) {
      return false;
    }
  }
  return true;
};

console.log("secondApproach", secondApproach());

/**
 This solution first creates a Set from the characters string using the Set constructor.

Then, for each character in the document string, the solution first checks whether the
character is present in the Set using the has() method of Set. If the character is not
present, then the solution immediately returns false since it's not possible to generate
the document without that character.

If the character is present in the Set, the solution counts the number of occurrences of
that character in both the document string and the characters string using the split()
method with the character as the separator. If the number of occurrences in the document
string is greater than the number of occurrences in the characters string, then the solution
returns false since it's not possible to generate the document with the given characters.

If the function hasn't returned false by the end of the loop, then it means the document can
be generated and the function returns true.
 */

/**
 Approach 1 using an object:

Time complexity: O(n + m), where n is the number of characters in the "characters" string and
m is the length of the "document" string. Space complexity: O(c), where c is the number of unique
characters in the "characters" string.

Approach 2 using a set:

Time complexity: O(n * m), where n is the number of characters in the "characters" string and m is
the length of the "document" string. The time complexity is worse than Approach 1 because of the
split() method used to count the occurrences of each character in the "document"
string.
Space complexity: O(c), where c is the number of unique characters in the "characters" string.
This is better than Approach 1 because a set only stores the unique characters, whereas an object
needs to store the count for each character.
 */
