/**
Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Bubble Sort algorithm to sort the array.

If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]

Best: O(n) time | O(1) space - where n is the length of the input array
Average: O(n^2) time | O(1) space - where n is the length of the input array
Worst: O(n^2) time | O(1) space - where n is the length of the input array
 */

const array = [8, 5, 2, 9, 5, 6, 3];

/**
 * O(n^2) time | O(1) space
 */
const firstApproach = () => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

console.log("firstApproach", firstApproach());

/**
 * compares adjacent element
 */

/**
j, j+1 0 1
j, j+1 1 2
j, j+1 2 3
j, j+1 3 4
j, j+1 4 5
j, j+1 5 6
j, j+1 0 1
j, j+1 1 2
j, j+1 2 3
j, j+1 3 4
j, j+1 4 5
j, j+1 0 1
j, j+1 1 2
j, j+1 2 3
j, j+1 3 4
j, j+1 0 1
j, j+1 1 2
j, j+1 2 3
j, j+1 0 1
j, j+1 1 2
j, j+1 0 1
 */
