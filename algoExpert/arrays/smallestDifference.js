/**
Write a function that takes in two non-empty arrays of integers, finds the
pair of numbers (one from each array) whose absolute difference is closest to
zero, and returns an array containing these two numbers, with the number from
the first array in the first position.

Note that the absolute difference of two integers is the distance between
them on the real number line. For example, the absolute difference of -5 and 5
is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest
difference.

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output
[28, 26]

Optimal Space & Time Complexity
O(nlog(n) + mlog(m)) time | O(1) space - where n is the length of the first input array and m is the length of the second input array
 */

const arrayOne = [-1, 5, 10, 20, 28, 3],
  arrayTwo = [26, 134, 135, 15, 17];

/**
 * O(n * m) time | O(1) space
 */
const firstApproach = () => {
  let smallestDiff = Infinity;
  let result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const diff = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        result = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  return result;
};

console.log("firstApproach", firstApproach());

/**
 * O(nlog(n) + mlog(m)) time | O(1) space
 */
const secondApproach = () => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallestDiff = Infinity;
  let result = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const diff = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]);
    if (diff === 0) {
      return [arrayOne[idxOne], arrayTwo[idxTwo]];
    }
    if (diff < smallestDiff) {
      smallestDiff = diff;
      result = [arrayOne[idxOne], arrayTwo[idxTwo]];
    }
    if (arrayOne[idxOne] < arrayTwo[idxTwo]) {
      idxOne++;
    } else {
      idxTwo++;
    }
  }
  return result;
};

console.log("secondApproach", secondApproach());
