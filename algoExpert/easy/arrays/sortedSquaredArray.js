/**
Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.
Sample Input
array = [1, 2, 3, 5, 6, 8, 9]
Sample Output
[1, 4, 9, 25, 36, 64, 81]

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input array
*/

// const array = [1, 2, 3, 5, 6, 8, 9];
const array = [-10, -5, 0, 4, 10];

/**
 * tc: O(nlogn) sc: O(n)
 */
const firstApproach = () => {
  const result = array.map((ele) => ele ** 2).sort((a, b) => a - b);
  return result;
};

console.log("firstApproach", firstApproach());

const secondApproach = () => {
  let left = 0,
    right = array.length - 1;
  const sortedSquares = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      sortedSquares[i] = array[left] ** 2;
      left++;
    } else {
      sortedSquares[i] = array[right] ** 2;
      right--;
    }
  }
  return sortedSquares;
};

console.log("secondApproach", secondApproach());
