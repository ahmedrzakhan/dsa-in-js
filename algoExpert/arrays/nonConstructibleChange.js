/**
Given an array of positive integers representing the values of coins in your
possession, write a function that returns the minimum amount of change (the
minimum sum of money) that you cannot create. The given coins can have
any positive integer value and aren't necessarily unique (i.e., you can have
multiple coins of the same value).

Sample Input
coins = [5, 7, 1, 1, 2, 3, 22]
Sample Output
20

Optimal Space & Time Complexity
O(nlogn) time | O(1) space - where n is the number of coins
 */

/**
 * O(n) time | O(1) space
 */

const coins = [1, 1, 1, 1, 1];

const firstApproach = () => {
  let minimumChange = 0;
  if (!coins.length) {
    return 1;
  }
  coins.sort((a, b) => a - b);
  if (coins[0] !== 1) {
    return 1;
  }
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minimumChange + 1) {
      return minimumChange + 1;
    }
    minimumChange += coins[i];
  }
  return minimumChange + 1;
};

console.log(firstApproach());

/**
1. Set minimumChange to 0.

2. If the coins array is empty, return 1.

3. Sort the coins array in ascending order.

4. If the first coin is not 1, return 1 (since we cannot form a 1-cent coin using the given coins).

5. Loop through each coin in the coins array:
a. Check if the current coin is greater than minimumChange + 1. If it is, return minimumChange + 1 (since we cannot form minimumChange + 1 using the given coins).
b. Otherwise, add the current coin to minimumChange.

6. If we reach the end of the loop, return minimumChange + 1, since we were able to form all values up to minimumChange.
 */
