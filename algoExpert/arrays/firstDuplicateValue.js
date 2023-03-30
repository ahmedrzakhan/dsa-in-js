/**
Given an array of integers between 1 and n,
inclusive, where  is the length of the array, write a function
that returns the first integer that appears more than once (when the array is
read from left to right).
In other words, out of all the integers that might occur more than once in the
input array, your function should return the one whose first duplicate value
has the minimum index.
If no integer appears more than once, your function should return
-1
Note that you're allowed to mutate the input array.
Sample Input #1
array = [2, 1, 5, 2, 3, 3, 4]

Sample Output #1
2
// 2 is the first integer that appears more than once.
// 3 also appears more than once, but the second 3 appears after the second 2.

Sample Input #2
array = [2, 1, 5, 3, 3, 2, 4]
Sample Output #2
3
// 3 is the first integer that appears more than once.
// 2 also appears more than once, but the second 2 appears after the second 3.
Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input array
 */

const array = [2, 1, 5, 3, 3, 2, 4];

/**
 * O(n^2) time | O(1) space
 */
const firstApproach = () => {
  let minimmumIndex = Infinity;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        minimmumIndex = Math.min(minimmumIndex, j);
      }
    }
  }

  if (minimmumIndex === Infinity) {
    return -1;
  }
  return array[minimmumIndex];
};

console.log("firstApproach", firstApproach());

/**
 * O(n) time | O(n) space
 */
const secondApproach = () => {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      return array[i];
    } else {
      obj[array[i]] = 1;
    }
  }
  return -1;
};

console.log("secondApproach", secondApproach());

/**
 * works only for all positive numbers (1 -> n)
 */
/**
 * O(n) time | O(1) space
 */
const thirdApproach = () => {
  const array = [2, 1, 5, 3, 3, 2, 4];
  for (let i = 0; i < array.length; i++) {
    const absValue = Math.abs(array[i]) - 1;
    if (array[absValue] < 0) {
      return Math.abs(array[i]);
    }
    array[absValue] = -array[absValue];
  }
  return -1;
};

console.log("thirdApproach", thirdApproach());
