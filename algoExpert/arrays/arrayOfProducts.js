/**
Write a function that takes in a non-empty array of integers and returns an
array of the same length, where each element in the output array is equal to
the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of
every number in the input array other than input[i].

Note that you're expected to solve this problem without using division.

Sample Input
array = [5, 1, 4, 2]
Sample Output
[8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the length of the input array
*/

const array = [5, 1, 4, 2];

/**
 * O(n) time | O(n)
 */
const firstApproach = () => {
  const n = array.length;
  const result = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct;
    leftProduct *= array[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= array[i];
  }

  return result;
};

console.log("firstApproach", firstApproach());