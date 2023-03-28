/**
Given an integer array nums, move all 0's to the end of it while maintaining the
relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

const array = [0, 1, 0, 3, 12];

/**
 * O(n) time | O(1) space
 */
const firstApproach = () => {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
  }
  return array;
};

console.log("firstApproach", firstApproach());
