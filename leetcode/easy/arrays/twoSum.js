/**
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target. You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

const array = [3, 2, 4];
const targetSum = 6;

/**
 * approach 1
 * tc: O(n^2) sc: O(1)
 * two for loops
 */
const firstApproach = function (array, targetSum) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        result.push(i, j);
      }
    }
  }
  return result;
};

console.log("firstApproach", firstApproach(array, targetSum));

/**
 * approach 2
 * tc: O(n) sc: O(n)
 * x + y = targetSum
 * y = targetSum - x
 * x + y = 10
 * y = 10 - x
 */

const secondApproach = function (array, targetSum) {
  let records = {};
  for (let i = 0; i < array.length; i++) {
    let diff = targetSum - array[i];
    if (diff in records) {
      return [i, records[diff]];
    }
    records[array[i]] = i;
  }
};

console.log("secondApproach", secondApproach(array, targetSum));
