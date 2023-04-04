/**
 * check leetcode/arrays/twoSum.js
 */
/**
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. If any two numbers in the input array sum
up to the target sum, the function should return them in an array, in any
order. If no two numbers sum up to the target sum, the function should return
an empty array.

Note that the target sum has to be obtained by summing two different integers
in the array; you can't add a single integer to itself in order to obtain the
target sum.

You can assume that there will be at most one pair of numbers summing up to
the target sum.

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output
[-1, 11]

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input array
*/

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

/**
 * approach 1
 * two for loops
 */

/**
 * O(n^2) time | O(1) space
 */
const firstApproach = (array, targetSum) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        result.push(array[i], array[j]);
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

const secondApproach = (array, targetSum) => {
  const result = [];
  const records = {};

  for (let i = 0; i < array.length; i++) {
    if (records[targetSum - array[i]]) {
      result.push(targetSum - array[i], array[i]);
    } else {
      records[array[i]] = 1;
    }
  }
  return result;
};

console.log("secondApproach", secondApproach(array, targetSum));

/**
The code creates an empty array result to store the output pairs and an empty object records to keep
track of the numbers that have been seen so far.

It then loops through each number in the array and checks if the complement (i.e., targetSum - array[i])
has been seen before in the records object. If the complement is found, it means that a pair that adds
up to the target sum has been found, and it is added to the result array. Otherwise, the current number
is added to the records object.

Finally, the function returns the result array containing all the pairs of numbers that add up to the target sum.
 */

/**
 * approach 3
 * tc: O(nlogn) sc: O(1)
 * sort array start pointer from both the sides
 */

const thirdApproach = (array, targetSum) => {
  array.sort((a, b) => a - b);

  let left = 0,
    right = array.length - 1;
  const result = [];
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return result;
};

console.log("thirdApproach", thirdApproach(array, targetSum));

/**
1. The basic idea is to initialize two pointers at the beginning and end of the array, and then move them
towards each other until they meet in the middle.

2. At each iteration, we calculate the sum of the numbers pointed by the two pointers, and compare it with
the target sum. If the sum is less than the target sum, we increment the left pointer to increase the sum,
and if the sum is greater than the target sum, we decrement the right pointer to decrease the sum.

3. The algorithm terminates either when we find a pair of numbers whose sum is equal to the target sum, or when
the left pointer crosses the right pointer, in which case there is no such pair in the array.
 */
