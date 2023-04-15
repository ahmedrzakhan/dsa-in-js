/**
Imagine you have a set of cities that are laid out in a circle, connected by a circular road that
runs clockwise. Each city has a gas station that provides gallons of fuel, and each city is some
 distance away from the next city.

You have a car that can drive some number of miles per gallon of fuel, and your goal is to pick a
starting city such that you can fill up your car with that city's fuel, drive to the next city,
refill up your car with that city's fuel, drive to the next city, and so on and so forth until you
return back to the starting city with 0 or more gallons of fuel left.

This city is called a valid starting city, and it's guaranteed that there will always be exactly
one valid starting city.

For the actual problem, you'll be given an array of distances such that city i is distances[i] away
from city i + 1. Since the cities are connected via a circular road, the last city is connected to
the first city. In other words, the last distance in the distances array is equal to the distance
from the last city to the first city. You'll also be given an array of fuel available at each city,
where fuel[i] is equal to the fuel available at city i. The total amount of fuel available (from all
cities combined) is exactly enough to travel to all cities. Your fuel tank always starts out empty,
and you're given a positive integer value for the number of miles that your car can travel per gallon
of fuel (miles per gallon, or MPG). You can assume that you will always be given at least two cities.

Write a function that returns the index of the valid starting city.

Sample Input
distances = [5, 25, 15, 10, 15]
fuel = [1, 2, 1, 0, 3]
mpg = 10

Sample Output
4

Optimal Space & Time Complexity
O(n) time | O(1) space - where n is the number of cities
 */

const distances = [5, 25, 15, 10, 15],
  fuel = [1, 2, 1, 0, 3],
  mpg = 10;

// const distances = [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
//   fuel = [1, 2, 0, 1, 1, 0, 3, 1, 0, 1],
//   mpg = 25;

/**
 * O(n^2) time | O(1) space
 */
const firstApproach = () => {
  const n = distances.length;
  for (let i = 0; i < n; i++) {
    let fuelLeft = 0;
    let valid = true;
    for (let j = 0; j < n; j++) {
      const city = (i + j) % n;
      const fuelNeeded = distances[city] / mpg;
      fuelLeft = Math.round((fuelLeft + fuel[city] - fuelNeeded) * 1e9) / 1e9;
      if (fuelLeft < 0) {
        valid = false;
        break;
      }
    }
    if (valid && fuelLeft >= 0) {
      return i;
    }
  }
  return -1;
};

console.log("firstApproach", firstApproach());

/**
 * brute force
 */

/**
 * O(n) time | O(1) space
 */
const secondApproach = () => {
  let numberOfCities = distances.length;
  let milesRemaining = 0;
  let indexOfStartingCityCandidate = 0;
  let milesRemainingAtStartingCityCandidate = 0;

  for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
    let distanceFromPreviousCity = distances[cityIdx - 1];
    let fuelFromPreviousCity = fuel[cityIdx - 1];
    milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;
    if (milesRemaining < milesRemainingAtStartingCityCandidate) {
      milesRemainingAtStartingCityCandidate = milesRemaining;
      indexOfStartingCityCandidate = cityIdx;
    }
  }
  return indexOfStartingCityCandidate;
};

console.log("secondApproach", secondApproach());
