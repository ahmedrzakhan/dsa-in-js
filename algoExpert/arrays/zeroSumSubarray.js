/**
You're given a list of integers nums. Write a function that
returns a boolean representing whether there exists a zero-sum subarray of
nums.

A zero-sum subarray is any subarray where all of the values add up to zero.
A subarray is any contiguous section of the array. For the purposes of this
problem, a subarray can be as small as one element and as long as the
original array.

Sample Input
nums = [-5, -5, 2, 3, -2]

Sample Output
True // The subarray [-5, 2, 3] has a sum of 0

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of nums
 */

/**
 * O(n) time | O(n) space
 */

const nums = [-5, -5, 2, -2, -2];

const firstApproach = () => {
  const sums = new Set();
  let sum = 0;
  for (const num of nums) {
    sum += num;
    if (sum === 0 || sums.has(sum)) {
      return true;
    }
    sums.add(sum);
  }
  return false;
};

console.log("firstApproach", firstApproach());

/**
We start by initializing an empty set sums and a variable sum to 0. We then iterate through each
element num in the array nums, adding it to the current sum sum. If the sum is equal to 0 or if
we have seen that sum before (i.e., sums already contains sum), then we know that there is a
subarray that sums to 0, so we return true. Otherwise, we add the sum to the sums set to keep
track of it and continue iterating through the array.

If we reach the end of the loop and have not found a subarray that sums to 0, we return false.
 */
