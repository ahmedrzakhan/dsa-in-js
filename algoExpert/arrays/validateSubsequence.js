/**
Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For
instance, the numbers [1, 3, 4]  form a subsequence of the array
[1, 2, 3, 4] , and so do the numbers [2, 4].
 Note:  that a single number in an array and the array itself are both valid subsequences of the array.
Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
Sample Output
true
Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the array
*/

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, -1];

const first = array[0];
const second = sequence[1];
let count = 0;
/**
 * O(n) time | O(1) space
 */
const firstApproach = (array, sequence) => {
  for (let i = 0; i < array.length; i++) {
    if (count === sequence.length) {
      return true;
    }

    if (array[i] === sequence[count]) {
      count++;
    }
  }

  if (count === sequence.length) {
    return true;
  }
  return false;
};

console.log("firstApproach", firstApproach(array, sequence));

/**
The intuition behind this code is to check whether the given array contains the given sequence
as a subsequence. The code initializes a count variable to 0 and loops through the array. If the
current element of the array matches the count-th element of the sequence, count is incremented.
Once count equals the length of the sequence, the function returns true, indicating that the array
contains the sequence. If the loop completes and count does not equal the length of the sequence,
the function returns false, indicating that the array does not contain the sequence.
 */
