/**
It's photo day at the local school, and you're the photographer assigned to take class photos.
The class that you'll be photographing has an even number of students, and all these students
are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and
the other half is wearing blue shirts. You're responsible for arranging the students in two
rows before taking the photo. Each row should contain the same number of the students and
should adhere to the following guidelines:
All students wearing red shirts must be in the same row.
All students wearing blue shirts must be in the same row.

Each student in the back row must be strictly taller than the student
directly in front of them in the front row.

You're given two input arrays: one containing the heights of all the students
with red shirts and another one containing the heights of all the students
with blue shirts. These arrays will always have the same length, and each
height will be a positive integer. Write a function that returns whether or
not a class photo that follows the stated guidelines can be taken.

Note: you can assume that each class has at least 2 students.

Sample Input
redShirtHeights = [5, 8, 1, 3, 4]
blueShirtHeights = [6, 9, 2, 4, 5]
Sample Output
true // Place all students with blue shirts in the back row.

Optimal Space & Time Complexity
O(nlog(n)) time | O(1) space - where n is the number of students
 */

const redShirtHeights = [5, 8, 1, 3, 4],
  blueShirtHeights = [6, 9, 2, 4, 5];

/**
 * O(nlog(n)) time | O(1) space
 */
const firstApproach = () => {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  const redInFront = redShirtHeights[0] > blueShirtHeights[0]; // check if red shirts should be in front or back
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redInFront) {
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return false; // blue shirt is taller or equal in height to corresponding red shirt
      }
    } else {
      if (blueShirtHeights[i] <= redShirtHeights[i]) {
        return false; // red shirt is taller or equal in height to corresponding blue shirt
      }
    }
  }
  return true;
};

console.log("firstApproach", firstApproach());

/**
 * sort array
 * create bool to see if red is in front
 * start for loop and have if check if red is in front and red is
 * less equal to blue return false and similar if block for blue
 */
