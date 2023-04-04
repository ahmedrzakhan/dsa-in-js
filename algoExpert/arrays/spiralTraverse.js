/**
Write a function that takes in an n x m two-dimensional array (that can be
square-shaped when n == m) and returns a one-dimensional array of all the
array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes
to the right, and proceeds in a spiral pattern all the way until every element
has been visited.

Sample Input
array = [
[1,   2,  3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7],
]

Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

Optimal Space & Time Complexity
O(n) time | O(n) space - where n is the total number of elements in the array
 */

const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
// const array = [
//   [1, 2, 3],
//   [12, 13, 4],
//   [11, 14, 5],
//   [10, 15, 6],
//   [9, 8, 7],
// ];

/**
 * O(n) time | O(n) space
 */
const firstApproach = () => {
  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Traverse right
    for (let i = startCol; i <= endCol; i++) {
      result.push(array[startRow][i]);
    }
    startRow++;

    // Traverse down
    for (let i = startRow; i <= endRow; i++) {
      result.push(array[i][endCol]);
    }
    endCol--;

    // Traverse left
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        result.push(array[endRow][i]);
      }
      endRow--;
    }

    // Traverse up
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        result.push(array[i][startCol]);
      }
      startCol++;
    }
  }

  return result;
};

console.log("firstApproach", firstApproach());

/**
 * The conditionals if (startCol <= endCol) and if (startRow <= endRow) are required to prevent traversing the same
 * row or column twice in opposite directions. For example, let's say we are traversing the matrix in a clockwise
 * spiral pattern and have completed traversing the top row from left to right. Without the if (startRow <= endRow)
 * check, we would proceed to traverse the right column from top to bottom, even if there is only one row remaining
 * in the matrix. This would result in traversing the first element of the next row, which we have already visited
 * during the top row traversal. Similarly, without the if (startCol <= endCol) check, we would proceed to traverse
 * the bottom row from right to left, even if there is only one column remaining in the matrix. This would result
 * in traversing the first element of the next column, which we have already visited during the right column traversal.
 * Therefore, the conditionals ensure that we only traverse a row or column if there are more rows or columns remaining to
 * traverse. This ensures that we visit each element in the matrix exactly once in a clockwise spiral pattern.
 */

/**
 * while (startRow < endRow && startCol < endCol works for square matrices
 * misses 13, 14, 15 in above example non square matrix
 */

/**
1. This function implements the "spiral order" traversal of a two-dimensional array. The idea is to start at the
top-left corner of the array and "spiral" inwards, traversing the outermost layer of the array first and then
moving inwards to the next layer.

2. The function uses four pointers to keep track of the boundaries of the current layer of the array: startRow,
endRow, startCol, and endCol. It then iterates through the array in four steps:

3. Traverse right along the current layer, from startCol to endCol, and add each element to the result array.

4. Traverse down along the current layer, from startRow to endRow, and add each element to the result array.

5. Traverse left along the current layer, from endCol to startCol, but only if there are still rows left to
traverse (startRow <= endRow). Add each element to the result array.

6. Traverse up along the current layer, from endRow to startRow, but only if there are still columns left to
traverse (startCol <= endCol). Add each element to the result array.

7. The function repeats this process until all elements of the array have been added to the result array in
spiral order.
 */
