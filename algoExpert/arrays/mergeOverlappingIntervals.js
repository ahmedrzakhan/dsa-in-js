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

/**
1. First, the intervals are sorted based on the starting time. This is done to ensure that the algorithm
can easily detect which intervals are overlapping.

2. A new array mergedIntervals is created to store the merged intervals.

3. The first interval in the sorted array is added to the mergedIntervals array.

4. Starting from the second interval, the algorithm compares the start time of the current interval with
the end time of the last interval in the mergedIntervals array.

5. If the start time of the current interval is less than or equal to the end time of the last interval
in the mergedIntervals array, then there is an overlap between the two intervals. In this case, the
algorithm merges the two intervals by updating the end time of the last interval in the mergedIntervals
array to be the maximum of the two end times.

6. If the start time of the current interval is greater than the end time of the last interval in the
mergedIntervals array, then there is no overlap between the two intervals. In this case, the algorithm
adds the current interval to the mergedIntervals array.

7. After processing all the intervals in the input array, the mergedIntervals array contains all the
non-overlapping intervals.

8. Finally, the mergedIntervals array is returned as the output of the algorithm.

In summary, the algorithm works by iteratively comparing each interval with the last interval in the
merged array to detect overlaps, and merging the intervals if necessary. This process results in a new
array of non-overlapping intervals.
 */
