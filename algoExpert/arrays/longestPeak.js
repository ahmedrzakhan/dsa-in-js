/**
Write a function that takes in an array of integers and returns the length of
the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly
increasing until they reach a tip (the highest value in the peak), at which
point they become strictly decreasing. At least three integers are required to
form a peak.

For example, the integers 1, 4, 10, 2 form a peak, but the
integers 4, 0, 10 don't and neither do the integers
1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
form a peak because there aren't any strictly decreasing integers after the
3.

Sample Input
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
Sample Output
6 // 0, 10, 6, 5, -1, -3

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the input array
 */

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

/**
 * O(n) time | O(1)
 */
const firstApproach = () => {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }
    const currentPeakLength = rightIdx - leftIdx - 1;
    if (currentPeakLength > longestPeakLength) {
      longestPeakLength = currentPeakLength;
    }
    i = rightIdx;
  }
  return longestPeakLength;
};

console.log("firstApproach", firstApproach());

/**
 * i = rightIdx;
 * After we've found a peak and calculated its length, we need to update i to
 * the index of the element immediately to the right of the peak (i.e., the
 * element where the strictly decreasing sequence starts). This is because
 * we've already examined all the elements in the peak, and we don't want to
 * revisit them again in the next iteration of the loop.
 * We can do this by setting i to rightIdx, which is the index of the element
 * immediately to the right of the peak. This will cause the loop to continue
 * from the right side of the peak, and we'll keep iterating until we find the
 * next peak (or the end of the array).
 * If we didn't update i in this way, we would end up examining the elements in
 * the current peak again in the next iteration of the loop, which would be redundant
 */

/**
1. The algorithm works by iterating through the input array, and at each index checking if the current
element is a peak (i.e., greater than its neighboring elements). If it's not a peak, the algorithm
simply moves on to the next element.

2. If the current element is a peak, the algorithm starts expanding to the left and right to find the
left and right boundaries of the peak. It does this by looking for decreasing elements to the left
of the peak and increasing elements to the right of the peak.

3. Once the left and right boundaries of the peak have been found, the algorithm calculates the length
of the peak (i.e., the number of elements between the left and right boundaries) and updates the
longest peak length if the current peak is longer.

4. The intuition behind the algorithm is that a peak is a sequence of elements that starts with an
increasing sequence and ends with a decreasing sequence. By looking for the left and right boundaries
of the peak, the algorithm is able to determine the length of the peak and update the longest peak length
if necessary.
 */
