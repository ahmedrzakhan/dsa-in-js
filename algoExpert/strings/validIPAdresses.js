/**
You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses
that can be created by inserting three .s in the string.

An IP address is a sequence of four positive integers that are separated by .s, where each individual integer is within the range
0 - 255, inclusive.

An IP address isn't valid if any of the individual integers contains leading 0s. For example, "192.168.0.1" is a valid IP address,
but "192.168.00.1" and "192.168.0.01" aren't, because they contain "00" and 01, respectively. Another example of a valid IP address
is "99.1.1.10"; conversely, "991.1.1.0" isn't valid, because "991" is greater than 255.

Your function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created
from the string, your function should return an empty list.

string = "1921680"
output = [
  "1.9.216.80",
  "1.92.16.80",
  "1.92.168.0",
  "19.2.16.80",
  "19.2.168.0",
  "19.21.6.80",
  "19.21.68.0",
  "19.216.8.0",
  "192.1.6.80",
  "192.1.68.0",
  "192.16.8.0"
]
// The IP addresses could be ordered differently.

Optimal Space & Time Complexity
O(1) time | O(1) space
 */

const string = "1921680";

/**
 * O(1) time | O(1) space
 */
const firstApproach = () => {
  const result = [];

  for (let i = 1; i <= 3; i++) {
    for (let j = i + 1; j <= i + 3; j++) {
      for (let k = j + 1; k <= j + 3; k++) {
        if (k < string.length && isValidPart(string.slice(k))) {
          const part1 = string.slice(0, i);
          const part2 = string.slice(i, j);
          const part3 = string.slice(j, k);
          const part4 = string.slice(k);

          if (isValidPart(part1) && isValidPart(part2) && isValidPart(part3)) {
            result.push(`${part1}.${part2}.${part3}.${part4}`);
          }
        }
      }
    }
  }

  return result;
};

const isValidPart = (string) => {
  if (
    string.length === 0 ||
    string.length > 3 ||
    (string[0] === "0" && string.length > 1) ||
    parseInt(string) > 255
  ) {
    return false;
  }
  return true;
};

console.log("firstApproach", firstApproach());

/**
 * ip address string cannot be more than 12 chars
 * 3digits.3digits.3digits.3digits
 * range from 0 to 255
 */

/**
The code is generating all possible combinations of valid IP addresses by dividing the
given string into 4 parts. It uses three nested loops to get all possible valid 4-partitions
of the string.

For each partition, it checks if the part is valid and has length greater than 1. The
isValidPart function is used to check if the partition is valid or not. If a partition
is valid, then the four parts are concatenated using a period '.' between them. Finally,
the resulting IP address is added to the result array.

Once all the valid IP addresses have been generated, the function returns the result array
containing all the valid IP addresses.
 */
