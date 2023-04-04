/**
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all quadruplets in
the array that sum up to the target sum and return a two-dimensional array of
all these quadruplets in no particular order.

If no four numbers sum up to the target sum, the function should return an
empty array.

Sample Input
array = [7, 6, 4, -1, 1, 2]
targetSum = 16

Sample Output
[[7, 6, 4, -1], [7, 6, 1, 2]]

Optimal Space & Time Complexity
Average: O(n^2) time | O(n^2) space - where n is the length of the input array
Worst: O(n^3) time | O(n^2) space - where n is the length of the input array
 */

/**
allPairs {
    '0': [ [ -1, 1 ] ],
    '3': [ [ 4, -1 ] ],
    '5': [ [ 6, -1 ], [ 4, 1 ] ],
    '6': [ [ 7, -1 ] ],
    '7': [ [ 6, 1 ] ],
    '8': [ [ 7, 1 ] ],
    '10': [ [ 6, 4 ] ],
    '11': [ [ 7, 4 ] ],
    '13': [ [ 7, 6 ] ]
  }
  quadruplets [ [ 7, 6, 4, -1 ], [ 7, 6, 1, 2 ] ]
*/

const array = [7, 6, 4, -1, 1, 2],
  targetSum = 16;

/**
 * Average: O(n^2) time | O(n^2) space
 * Worst: O(n^3) time | O(n^2) space
 */
const firstApproach = () => {
  const allPairs = {};
  const quadruplets = [];
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;
      if (difference in allPairs) {
        // notice for of
        for (const pair of allPairs[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];
      if (!(currentSum in allPairs)) {
        allPairs[currentSum] = [[array[k], array[i]]];
      } else {
        allPairs[currentSum].push([array[k], array[i]]);
      }
    }
  }
  console.log("allPairs", allPairs);
  console.log("quadruplets", quadruplets);
  return quadruplets;
};

console.log("firstApproach", firstApproach());

/**
The goal of this algorithm is to find all quadruplets in a given array that sum up to a target
value. Here's how the algorithm works:

1. Initialize an empty object called allPairs to store pairs of integers and an empty array called
 quadruplets to store the quadruplets.
2. Loop through all possible pairs of distinct integers in the array (using nested loops).
3. For each pair, calculate the sum of the two integers and the difference between the target sum
 and the current sum.
4. If the difference is in the allPairs object, this means that there is at least one pair of
integers whose sum is equal to the difference, and adding the current pair to that pair would
make a quadruplet whose sum is equal to the target sum. So, for each pair in allPairs[difference],
create a new quadruplet by concatenating that pair with the current pair (i.e., the pair in the
outer loop), and add the resulting quadruplet to the quadruplets array.
5. Next, loop through all pairs of integers that come before the second integer in the outer loop.
For each of these pairs, calculate their sum and add them to the allPairs object if their sum is
not already in the object. If their sum is already in the object, add the current pair (i.e.,
the pair in the outer loop) to the array of pairs whose sum is equal to the current sum.
6. Once all possible quadruplets have been checked, return the quadruplets array.
Note that the algorithm uses the allPairs object to keep track of pairs of integers whose sum is
equal to a certain value. This allows the algorithm to quickly check if there is a pair of integers
whose sum is equal to the difference between the target sum and the current sum in the outer loop,
and to create quadruplets from those pairs and the current pair.

The time complexity of this algorithm is O(n^3) in the worst case, where n is the length of the
input array. This is because we are using three nested loops to iterate over all possible
combinations of integers in the array. However, the algorithm may be faster in practice than
the previous algorithm we discussed if there are many duplicate integers in the array or if
there are many quadruplets that sum up to the target value.
 */

/**
 Here's a mathematical expression for the key idea behind this algorithm:

Suppose we have an array of n distinct integers, and we want to find all quadruplets (a,b,c,d)
such that a+b+c+d = S for some target sum S. We can rewrite this equation as:

a + b = S - (c + d)

This means that we can find all pairs of integers (a,b) such that a+b = S - (c+d), and then check
if there are any pairs (c,d) that satisfy this equation. We can store the pairs (a,b) in a hash
table, and then iterate over all pairs (c,d) in the array, checking if the sum S - (c+d) is in
the hash table. If it is, we can construct a quadruplet by combining the pairs (a,b) and (c,d)
that satisfy the equation.

The reason this works is that we are reducing the problem of finding quadruplets with a certain
sum to the problem of finding pairs with a certain sum, which can be solved more efficiently.
We're essentially using the hash table to cache pairs of integers that we've seen before, so that
we don't have to search the entire array again for each pair.
 */
