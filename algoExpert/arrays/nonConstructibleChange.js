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
