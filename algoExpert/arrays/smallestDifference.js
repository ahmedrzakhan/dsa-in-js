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
 This algorithm takes in two arrays, arrayOne and arrayTwo. It then searches through both
 arrays and finds the two elements whose absolute difference is smallest. It does this by
 comparing each element in arrayOne to each element in arrayTwo and calculating the absolute
 difference between them. It keeps track of the smallest difference it has found so far and
 the two elements that gave it that difference. Once it has searched through both arrays, it
 returns an array containing these two elements.
 */

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

/**
 1. The algorithm finds the pair of numbers, one from each of the two input arrays, that have the smallest
 absolute difference between them. Here's how it works:

2. The two input arrays, arrayOne and arrayTwo, are sorted in ascending order using the sort method with a
 comparison function that returns the difference between the two values being compared.

3. Two indices, idxOne and idxTwo, are initialized to 0.

4. A variable smallestDiff is initialized to Infinity.

5. A variable result is initialized to an empty array.

6. A while loop is used to iterate over the two arrays, as long as the indices idxOne and idxTwo are both
 less than the length of their respective arrays.

7. At each iteration of the loop, the absolute difference between the current element of arrayOne and the
current element of arrayTwo is computed and stored in the variable diff.

8. If diff is 0, meaning the two elements are equal, the function returns an array containing those two elements.

9. Otherwise, if diff is less than smallestDiff, smallestDiff is updated to diff, and result is updated to an array
containing the current elements from arrayOne and arrayTwo.

10. If the current element of arrayOne is less than the current element of arrayTwo, idxOne is incremented.

11. Otherwise, idxTwo is incremented.

12 . Once the loop has finished, result contains the pair of elements from the two arrays with the smallest absolute difference between them, and that pair is returned.
 */
