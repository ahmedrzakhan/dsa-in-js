/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k,
and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 */

// const array = [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5];
// const array = [-1, 0, 1, 2, -1, -1, -4];
const array = [-1, 0, 1, 2, -1, -4];
const targetSum = 0;

/**
 * O(n^3) time | O(1) space
 */
const firstApproach = function () {
  const result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && array[i] === array[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < array.length - 1; j++) {
      // Skip duplicates
      if (j > i + 1 && array[j] === array[j - 1]) {
        continue;
      }
      for (let k = j + 1; k < array.length; k++) {
        // Skip duplicates
        if (k > j + 1 && array[k] === array[k - 1]) {
          continue;
        }
        if (array[i] + array[j] + array[k] === 0) {
          result.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  return result;
};

console.log("firstApproach", firstApproach());

/**
 * O(n^2) time | O(n) space
 */
const secondApproach = () => {
  array.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < array.length - 2; i++) {
    if (i > 0 && array[i] === array[i - 1]) {
      continue;
    } // skip duplicates
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum === 0) {
        result.push([array[i], array[left], array[right]]);
        while (left < right && array[left] === array[left + 1]) {
          left++; // skip duplicates
        }
        while (left < right && array[right] === array[right - 1]) {
          right--; // skip duplicates
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log("secondApproach", secondApproach());
