/**
Write a function that takes in a non-empty array of arbitrary intervals,
merges any overlapping intervals, and returns the new intervals in no
particular order.
Each interval interval is an array of two integers, with interval[0] as the start of the
interval and interval[1] as the end of the interval.

Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and
[6, 7] aren't overlapping; however, [1, 6] and [6, 7] are indeed overlapping.

Also note that the start of any particular interval will always be less than or equal to the
end of that interval.

Sample Input
intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
Sample Output
[[1, 2], [3, 8], [9, 10]]
// Merge the intervals [3, 5], [4, 7], and [6, 8].
// The intervals could be ordered differently.

Optimal Space & Time Complexity
O(nlog(n)) time | O(n) space - where n is the length of the input array
*/

const intervals = [
  [1, 2],
  [3, 5],

  [6, 8],
  [4, 7],
  [9, 10],
];

/**
 * O(nlog(n)) time | O(n) space
 */
const firstApproach = () => {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = mergedIntervals[mergedIntervals.length - 1];
    if (currentInterval[0] <= previousInterval[1]) {
      // current interval overlaps with previous interval, merge them
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      // current interval doesn't overlap with previous interval, add it to the result
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};

console.log("firstApproach", firstApproach());
