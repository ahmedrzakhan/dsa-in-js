/**
 * check leetcode/arrays/moveZeroes.js
 * doesn't swaps or moves other elements only moves zeroes
 */
/**
You're given an array of integers and an integer. Write a function that moves
all instances of that integer in the array to the end of the array and returns
the array.

The function should perform this in place (i.e., it should mutate the input
array) and doesn't need to maintain the order of the other integers.

Sample Input
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2

Sample Output
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the array
 */

const array = [2, 1, 2, 2, 2, 3, 4, 2],
  toMove = 2;

/**
 * O(n) time | O(1) space
 */
const firstApproach = () => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === toMove) {
      right--;
    }
    if (array[left] === toMove) {
      [array[left], array[right]] = [array[right], array[left]];
    }
    left++;
  }

  return array;
};

console.log("firstApproach", firstApproach());

/**
1. Initialize two pointers, 'left' and 'right', to the start and end of the array respectively.

2. While the 'left' pointer is less than the 'right' pointer, repeat the following steps:
a. Move the 'right' pointer to the left until it encounters an element that is not equal to the 'toMove' value.
b. If the element at the 'left' pointer is equal to the 'toMove' value, swap it with the element at the 'right' pointer.
c. Move the 'left' pointer to the right.

3.Return the modified array with all occurrences of the 'toMove' value moved to the end.

The intuition behind the algorithm is that it maintains two pointers at opposite ends of the array and swaps elements as needed to move all occurrences of the 'toMove' value to the end. By moving the 'right' pointer to the left until it reaches a non-'toMove' value, it ensures that the elements swapped to the end are not already in the correct position. The 'left' pointer is used to iterate through the array and identify elements that need to be swapped. By incrementing the 'left' pointer once an element has been swapped or is not equal to 'toMove', the algorithm ensures that each element is processed only once.
 */
