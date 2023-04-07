/**
Write a function that takes in a Binary Search Tree (BST) and a target integer
value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node. A node
is said to be a valid BST node if and only if it satisfies the BST property: its value
is strictly greater than the values of every node to its left; its value is less than
or equal to the values of every node to its right; and its children nodes are either
valid BST nodes themselves or None / null.

Sample Input
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
target = 12

Sample Output
13

Optimal Space & Time Complexity
Average: O(log(n)) time | O(1) space - where n is the number of nodes in the BST
Worst: O(n) time | O(1) space - where n is the number of nodes in the BST
 */

const tree = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 15,
    left: {
      value: 13,
      left: null,
      right: {
        value: 14,
        left: null,
        right: null,
      },
    },
    right: {
      value: 22,
      left: null,
      right: null,
    },
  },
};

const target = 12;

/**
 * Average: O(log(n)) time | O(1) space - where n is the number of nodes in the BST
 * Worst: O(n) time | O(1) space - where n is the number of nodes in the BST
 */
function findClosestValueInBst() {
  let closest = tree.value; //initialize closest as the root node value
  let currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value; //update closest if currentNode is closer to target
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left; //explore left subtree
    } else if (target > currentNode.value) {
      currentNode = currentNode.right; //explore right subtree
    } else {
      return closest;
    }
  }

  return closest;
}

console.log("findClosestValueInBst", findClosestValueInBst());
