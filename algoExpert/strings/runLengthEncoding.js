/**
Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data
are stored as a single data value and count, rather than as the original run." For this problem, a
run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded
as "3A".

To make things more complicated, however, the input string can contain all sorts of special characters, including
numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs.
For example, the run "AAAAAAAAAAAA" (12 A's), can't naively be encoded as "12A", since this string can be decoded
as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split
fashion; the aforementioned run should be encoded as "9A3A".

Sample Input
string = "AAAAAAAAAAAAABBCCCCDD"

Sample Output
"9A4A2B4C2D"

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input string
 */

const string = "AAAAAAAAAAAAABBCCCCDD";

/**
 * O(n) time | O(n) space
 */
const firstApproach = () => {
  let result = "";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count++;
    if (string[i] !== string[i + 1] || count === 9) {
      result += `${count}${string[i]}`;
      count = 0;
    }
  }
  return result;
};

console.log("firstApproach", firstApproach());

const secondApproach = () => {
  let result = "";
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1] || count === 9) {
      result += count + string[i - 1];
      count = 0;
    }
    count++;
  }
  /**
   * In the line result += count + string[string.length - 1];,
   * we are appending the final run of characters to our result string.
   */
  result += count + string[string.length - 1];
  return result;
};

console.log("secondApproach", secondApproach());

/**
 * reason for maximumdigit we can have is nine for delimiter
 * so lets say for 13A
 * we don't know  if 1 is delimiter for 3 or we have 1 before 3
 */
