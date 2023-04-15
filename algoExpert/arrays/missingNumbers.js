/**
You're given an unordered list of unique integers nums in the range [1, n], where n
represents the length of nums + 2. This means that two numbers in this range are
missing from the list.

Write a function that takes in this list and returns a new list with the two missing
numbers, sorted numerically.

Sample Input
nums = [1, 4, 3]

Sample Output
[2, 5] // n is 5, meaning the completed list should be [1, 2, 3, 4, 5]

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input array
 */

const nums = [1, 4, 3];

/**
 * O(n) time | O(n) space
 */
const firstApproach = () => {
  const existingNums = new Set(nums);
  const result = [];
  for (let i = 1; i < existingNums.size + 3; i++) {
    if (!existingNums.has(i)) {
      result.push(i);
    }
  }
  return result;
};

console.log("firstApproach", firstApproach());

/**
 * put existing nums in set
 * iterate over set from 1 to n
 * put missing ones in result and return
 */

/**
 * O(n) time | O(1) space
 */
const secondApproach = () => {
  let total = 0;
  for (let i = 1; i <= nums.length + 2; i++) {
    total += i;
  }
  for (const num of nums) {
    total -= num;
  }
  averageMissingValue = Math.floor(total / 2);
  let foundFirstHalf = 0,
    foundSecondHalf = 0;
  for (const num of nums) {
    if (num <= averageMissingValue) {
      foundFirstHalf += num;
    } else {
      foundSecondHalf += num;
    }
  }
  let expectedFirstHalf = 0,
    expectedSecondHalf = 0;
  for (let i = 1; i <= averageMissingValue; i++) {
    expectedFirstHalf += i;
  }
  for (let i = averageMissingValue + 1; i <= nums.length + 2; i++) {
    expectedSecondHalf += i;
  }
  return [
    expectedFirstHalf - foundFirstHalf,
    expectedSecondHalf - foundSecondHalf,
  ];
};

console.log("secondApproach", secondApproach());

/**
 * calculate total from 1 to n + 2
 * subtract existing numbers from total, now we have missing value
 * get average missing value by dividing by 2
 * sum up foundFirstHalf and foundSecondHalf (calculate from aavaialble numbers)
 * sum up expectedFirstHalf and expectedSecondHalf (calculate from index)
 * 1, 2, 3,| 4, 5
 */
