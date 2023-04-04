/**
There's an algorithms tournament taking place in which teams of programmers
compete against each other to solve algorithmic problems as fast as possible.
Teams compete in a round robin, where each team faces off against all other
teams. Only two teams compete against each other at a time, and for each
competition, one team is designated the home team, while the other team is the
away team. In each competition there's always one winner and one loser; there
are no ties. A team receives 3 points if it wins and 0 points if it loses. The
winner of the tournament is the team that receives the most amount of points.


Given an array of pairs representing the teams that have competed against each
other and an array containing the results of each competition, write a
function that returns the winner of the tournament. The input arrays are named
competitions  and results, respectively. The competitions array has elements in
 the form of[homeTeam, awayTeam], where each team is a string of at most 30 characters
  representing the name
 of the team.
The results array contains information about the winner of each corresponding competition
in the competitions array. Specifically, results[i] denotes the winner of competitions[i],
where a 1 in the results array means that the home team in the corresponding competition
won and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will
compete against all other teams exactly once. It's also guaranteed that the tournament
 will always have at least two teams.

Sample Input
competitions  = [
["HTML", "C#"],
["C#", "Python"],
["Python", "HTML"],
]

results = [0, 0, 1]

Sample Output
"Python"
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points
// C# -  3 points
// Python -  6 points

Optimal Space & Time Complexity
O(n) time | O(k) space - where n is the number of competitions and k is the number of teams
 */

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];

/**
 * O(n) time | O(k) space
 */
const firstApproach = () => {
  const scoreboard = {};
  const leader = {
    name: "",
    score: -Infinity,
  };
  competitions.map((competition, index) => {
    const winnerIndex = results[index] === 1 ? 0 : 1;
    const winner = competition[winnerIndex];

    if (scoreboard[winner]) {
      scoreboard[winner] += 3;
    } else {
      scoreboard[winner] = 3;
    }

    if (leader.score < scoreboard[winner]) {
      leader.name = winner;
      leader.score = scoreboard[winner];
    }
  });

  return leader.name;
};

console.log("firstApproach", firstApproach());

/**
1. This function is implementing a scoring system for a set of competitions, where each competition
involves two teams, and the winner earns 3 points, while the loser earns 0 points.

2. The function takes in two arrays as arguments: competitions, which contains arrays representing each
competition with the names of the two teams, and results, which is an array of integers representing the
winner of each competition (0 for the second team, and 1 for the first team).

3. The function creates an empty object called scoreboard to store the scores of each team. It then
iterates over each competition using the map method, and calculates the winner's index and name
based on the results array. It then updates the scoreboard object to add 3 points to the winner's
score or create a new score for the winner if they are not in the scoreboard object.

4. The function also keeps track of the current leader (i.e., the team with the highest score) by
comparing each team's score to the leader object's score. If a team's score is greater than the
current leader score, then the leader object is updated with the new leader's name and score.

5. Finally, the function returns the name of the team with the highest score (i.e., the leader).
 */
