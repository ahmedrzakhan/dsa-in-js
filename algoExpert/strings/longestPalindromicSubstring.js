/**
Write a function that, given a string, returns its longest palindromic
substring.

A palindrome is defined as a string that's written the same forward and
backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.

Sample Input
string = "abaxyzzyxf"

Sample Output
"xyzzyx"

Optimal Space & Time Complexity
O(n^2) time | O(n) space - where n is the length of the input string
 */

const string = "abaxyzzyxf";

/**
 * O(n^3) time | O(1) space
 */
const firstApproach = () => {
  let longest = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (
        substring === substring.split("").reverse().join("") &&
        substring.length > longest.length
      ) {
        longest = substring;
      }
    }
  }
  return longest;
};

// console.log("firstApproach", firstApproach());

/**
 * generate all substrings and see if it's a palindrome and store the longest one
 */

/**
 * O(n^2) time | O(1) space
 * The time complexity of the expanding approach is O(n^2), where n is the length of the input string. T
 * his is because we need to expand around each possible center of the palindrome, and there are 2n - 1
 * possible centers.
 * The space complexity is O(1), which is constant space. This is because we only use a constant amount of
 * extra space to store the start and end indices of the longest palindromic substring found so far, as well
 * as a few loop variables. Therefore, the space complexity does not depend on the length of the input string.
 */
const secondApproach = () => {
  const expandFromCenter = (string, leftIndex, rightIndex) => {
    while (
      leftIndex >= 0 &&
      rightIndex < string.length &&
      string[leftIndex] === string[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
    }
    return rightIndex - leftIndex - 1;
  };

  let longestStartIndex = 0;
  let longestEndIndex = 0;
  for (let centerIndex = 0; centerIndex < string.length; centerIndex++) {
    const oddPalindromeLength = expandFromCenter(
      string,
      centerIndex,
      centerIndex
    );
    const evenPalindromeLength = expandFromCenter(
      string,
      centerIndex,
      centerIndex + 1
    );

    const maxLength = Math.max(oddPalindromeLength, evenPalindromeLength);
    const startIndex = centerIndex - Math.floor((maxLength - 1) / 2);
    const endIndex = centerIndex + Math.floor(maxLength / 2);
    if (maxLength > longestEndIndex - longestStartIndex) {
      longestStartIndex = startIndex;
      longestEndIndex = endIndex;
    }
  }
  return string.substring(longestStartIndex, longestEndIndex + 1);
};

console.log("secondApproach", secondApproach());

/**
The expanding approach works by iterating over each character of the input string and treating it as a possible
center for a palindromic substring. We then expand outwards from this center to find the longest palindromic
substring that includes this center.

To handle palindromic substrings with even length, we need to consider two possible centers: the character at the
current index and the character to its right. We then expand outwards from these centers to find the longest palindromic
substring that includes both centers.

We keep track of the longest palindromic substring found so far and update it whenever we find a longer one. Finally, we
return the longest palindromic substring.

The time complexity of this approach is O(n^2) since we expand around each center of the palindrome, and there are 2n-1
possible centers. However, this approach is easy to understand and implement, and it can be a good starting point for
solving more complex palindrome-related problems.
 */
