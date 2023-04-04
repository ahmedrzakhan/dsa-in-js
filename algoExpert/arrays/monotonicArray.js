/**
Write a function that takes in an array of integers and returns a boolean
representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are
entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply
don't increase. Similarly, non-decreasing elements aren't necessarily
exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Sample Output
true

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the length of the array
 */

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// array = [2, 2, 2, 2], [1, 1, 1, 2, -1]
const breaksDirection = (direction, previousInt, currentInt) => {
  const difference = currentInt - previousInt;
  if (direction > 0) {
    return difference < 0;
  }
  return difference > 0;
};

/**
 * O(n) time | O(1) space
 */
const firstApproach = () => {
  if (array.length <= 2) {
    return true;
  }
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
};

console.log("firstApproach", firstApproach());

/**
 1. First, the algorithm checks whether the length of the input array is less than or equal to 2. If it is,
 it returns true because an array of length 2 or less can always be considered a zigzag array.

2. The algorithm initializes a variable called "direction" to the difference between the second element and
the first element of the array. This direction variable will be used to keep track of whether the array is
currently in an upward trend (positive direction value), downward trend (negative direction value), or a
flat trend (zero direction value).

3. The algorithm iterates over the array starting from the third element. For each element, it checks whether
the direction variable is zero. If it is, it sets the direction variable to the difference between the current
element and the previous element and continues to the next iteration.

4. If the direction variable is not zero, the algorithm checks whether the current element breaks the direction
of the array. It does this by calling a function called "breaksDirection" which takes the current direction
value, the previous element, and the current element as inputs. This function checks whether the difference
between the previous element and the current element is in the opposite direction of the current direction
value. If it is, then the current element breaks the direction of the array and the algorithm returns false.

5. If the current element does not break the direction of the array, the algorithm continues to the next iteration
 of the loop and updates the direction variable based on the difference between the current element and the
 previous element.

6. If the loop completes without finding any element that breaks the direction of the array, then the algorithm
returns true.
 */

/**
 * O(n) time | O(1) space
 */
const secondApproach = () => {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
  }

  return isNonIncreasing || isNonDecreasing;
};

console.log("secondApproach", secondApproach());

/**
1. The algorithm starts by initializing two boolean variables, isNonIncreasing and isNonDecreasing, to true.

2. It then loops through the input array from the second element to the last element.

3. For each element in the array, it checks whether the element is greater than or less than the previous element.

4. If the element is greater than the previous element, the isNonIncreasing variable is set to false.

5. If the element is less than the previous element, the isNonDecreasing variable is set to false.

6. After looping through the entire array, the algorithm returns true if either isNonIncreasing or isNonDecreasing
is true, otherwise it returns false.

The intuition behind the algorithm is that if an array is either non-increasing or non-decreasing, then the array is sorted in some way. If neither condition is true, then the array is not sorted in any way.
 */
