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
 * O(nlogn) time | O(n) space
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

/**
1. This function takes an array of integers and returns an array with the squares of each integer sorted in
non-decreasing order.

2. The intuition behind this function is that when we square a negative integer, we get a positive integer.
So, if we have an array with both negative and positive integers, the squares of the negative integers will
be larger than the squares of the positive integers. Therefore, we can sort the squares in non-decreasing
order by comparing the squares of the largest (i.e., the absolute value of the smallest) integers in the array.

3. To implement this, we can use two pointers starting from the beginning and end of the array, and compare the
absolute values of the integers at those pointers. We can then square the integer with the larger absolute value
and add it to the sorted squares array, and move the pointer towards the center of the array. We repeat this
process until both pointers meet in the middle, and we have added all the squares to the sorted squares array.
 */
