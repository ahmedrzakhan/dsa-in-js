/**

You walk into a theatre you're about to see a show in. The usher within the theatre walks you to your row
and mentions you're allowed to sit anywhere within the given row. Naturally you'd like to sit in the seat
that gives you the most space. You also would prefer this space to be evenly distributed on either side of
you (e.g. if there are three empty seats in a row, you would prefer to sit in the middle of those three
seats). Given the theatre row represented as an integer array, return the seat index of where you should sit.
Ones represent occupied seats and zeroes represent empty seats. You may assume that someone is always sitting
in the first and last seat of the row. Whenever there are two equally good seats, you should sit in the seat
with the lower index. If there is no seat to sit in, return -1. The given array will always have a length of
at least one and contain only ones and zeroes.

Sample Input
seats = [1, 0, 1, 0, 0, 0, 1]

Sample Output
4

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the number of seats
 */

const seats = [1, 0, 1, 0, 0, 0, 1];

/**
 * O(n) time | O(1) space
 */
const firstApproach = () => {
  let bestSeat = -1,
    maxSpace = 0,
    left = 0;
  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && seats[right] === 0) {
      right += 1;
    }
    const availableSpace = right - left - 1;
    if (availableSpace > maxSpace) {
      bestSeat = Math.floor((left + right) / 2);
      maxSpace = availableSpace;
    }
    left = right;
  }
  return bestSeat;
};

console.log("firstApproach", firstApproach());

/**
 * start pointers left and right
 * left at the beginning and right one ahead of right
 * loop from right to end as long as right is 0
 * use available space as right - left - 1
 * if available space is greater than maxSpace update best seat and maxSpace
 * update left as equal to right
 */
