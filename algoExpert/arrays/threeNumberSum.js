/**
 * check leetcode/arrays/3Sum.js
 */
/**
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in
the array that sum up to the target sum and return a two-dimensional array of
all these triplets. The numbers in each triplet should be ordered in ascending
order, and the triplets themselves should be ordered in ascending order with
respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an
empty array.

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]

Sample Output
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

Optimal Space & Time Complexity
O(n^2) time | O(n) space - where n is the length of the input array
 */

/**
array: [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
targetSum: 0
[
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 0, 6],
  [-6, 1, 5],
  [-5, -1, 6],
  [-5, 0, 5],
  [-5, 2, 3],
  [-1, 0, 1]
]
*/

const array = [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5];
// const array = [-1, 0, 1, 2, -1, -4];
const targetSum = 0;

/**
 * O(n^3) time | O(1) space
 */
function firstApproach() {
  const result = [];
  /**
   * sorting not necessary/required
   * However, sorting the array can help us eliminate duplicates in the output. Without sorting, we may end up with duplicate
   * triplets if we encounter the same numbers in a different order. For example, [1, 2, -3] and [2, -3, 1] are essentially the
   * same triplet, but would be counted as separate triplets without sorting.
   * Sorting the array would help us avoid this issue by ensuring that each triplet is in ascending order.
   */
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          result.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  return result;
}

console.log("firstApproach", firstApproach());

/**
 * O(n^2) time | O(n) space
 */
const secondApproach = () => {
  const result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log("secondApproach", secondApproach());
