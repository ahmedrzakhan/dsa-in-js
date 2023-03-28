/**
Write a function that takes in an array of integers and returns a boolean
representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are
entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply
don't increase. Similarly, non-decreasing elements aren't necessarily
exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Sample Output
true

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the array
 */

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// array = [2, 2, 2, 2], [1, 1, 1, 2, -1]
const breaksDirection = (direction, previousInt, currentInt) => {
  const difference = currentInt - previousInt;
  if (direction > 0) {
    return difference < 0;
  }
  return difference > 0;
};

/**
 * O(n) time | O(1) space
 */
const firstApproach = () => {
  if (array.length <= 2) {
    return true;
  }
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
};

console.log("firstApproach", firstApproach());

/**
 * O(n) time | O(1) space
 */
const secondApproach = () => {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
  }

  return isNonIncreasing || isNonDecreasing;
};

console.log("secondApproach", secondApproach());
