/**
Write a function that takes in an array of at least two integers and that
returns an array of the starting and ending indices of the smallest subarray
in the input array that needs to be sorted in place in order for the entire
input array to be sorted (in ascending order).

If the input array is already sorted, the function should return [-1, -1]

Sample Input
array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

Sample Output
[3, 9]

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input array
 */

const array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

/**
 * O(n) time | O(1) space
 */
const firstApproach = () => {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }
  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
    subarrayLeftIdx++;
  }
  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
    subarrayRightIdx--;
  }
  return [subarrayLeftIdx, subarrayRightIdx];
};

const isOutOfOrder = (i, num, array) => {
  if (i === 0) {
    return num > array[i + 1];
  }
  if (i === array.length - 1) {
    return num < array[i - 1];
  }
  return num > array[i + 1] || num < array[i - 1];
};

console.log("firstApproach", firstApproach());

/**
This problem asks us to find the smallest subarray in an input array that needs to be sorted
in place in order to sort the entire array. One way to approach this problem is to find the
indices of the first and last out-of-order elements in the array, since the subarray that
needs to be sorted will include all elements between these two indices.

To find the first and last out-of-order elements, we can iterate through the array and compare
each element to its neighbors. If an element is greater than its next neighbor or less than its
previous neighbor, then it is out of order. We keep track of the minimum and maximum out-of-order
elements, which will give us the range of the subarray that needs to be sorted.

Once we have the minimum and maximum out-of-order elements, we can find the indices of the first
and last elements in the input array that are greater than or less than the minimum and maximum,
respectively. These indices will give us the range of the subarray that needs to be sorted.
 */
