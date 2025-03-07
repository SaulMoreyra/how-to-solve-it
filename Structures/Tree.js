class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  printTree(node = this.root) {
    const printTreeHelper = (node, prefix, isLeft) => {
      if (!node) return;

      console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
      const newPrefix = prefix + (isLeft ? "│   " : "    ");

      printTreeHelper(node.left, newPrefix, true);
      printTreeHelper(node.right, newPrefix, false);
    };
    printTreeHelper(node, "", false);
  }

  insertIterative(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  searchIterative(value) {
    let current = this.root;
    while (true) {
      if (current === null) return null;
      if (current.value === value) return current;
      if (value < current.value) current = current.left;
      if (value > current.value) current = current.right;
    }
  }

  /**
   * First we go to last node from left side
   * We process the current node (pop, and store the node value)
   * We switch to right node and repeat
   */
  inOrderIterative() {
    const stack = [];
    const values = [];
    let current = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      values.push(current.value);
      current = current.right;
    }

    return values;
  }

  preOrderIterative() {
    if (!this.root) return [];
    const stack = [this.root];
    const values = [];

    while (stack.length > 0) {
      const node = stack.pop();
      values.push(node.value);

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return values;
  }

  inOrderTraversal(root = this.root) {
    const values = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left); // Checks the left sub tree
      values.push(node.value); // Checks the current node
      traverse(node.right); // Checks the right sub tree
    }

    traverse(root);
    return values;
  }

  preOrderTraversal(root = this.root) {
    const values = [];

    function traverse(node) {
      if (!node) return;
      values.push(node.value); // Checks the current node
      traverse(node.left); // Checks the left sub tree
      traverse(node.right); // Checks the right sub tree
    }

    traverse(root);
    return values;
  }

  postOrderIterative(current = this.root) {
    const stack = [];
    const values = [];
    let lastVisited = null;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      const topNode = stack[stack.length - 1];

      if (topNode.right && topNode.right !== lastVisited) {
        current = topNode.right;
      } else {
        lastVisited = stack.pop();
        values.push(lastVisited.value);
      }
    }

    return values;
  }

  postOrderTraversal(root = this.root) {
    const values = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left); // Checks the left sub tree
      traverse(node.right); // Checks the right sub tree
      values.push(node.value); // Checks the current node
    }

    traverse(root);
    return values;
  }

  /**
     * height is measured from bottom to top
     * we need to count the edges (aristas) instead of nodes
     *

    * Build the tree:
    *         1     -> 2
    *       /   \
    *      2     3  -> 1
    *     / \
    *    4   5      -> 0
    *   /    \
    * null  null   -> -1
    * 
    * Node 4: height = 0 (sheet).
    * Node 5: height = 0 (sheet).
    * Node 2: height = 1 + max(0, 0) = 1.
    * Node 3: height = 0 (sheet).
    * Node 1 (root): height = 1 + max(1, 0) = 2.
  */
  getHeightRecursive(node = this.root) {
    if (node === null) return -1;
    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  getNodeDepthRecursive(targetValue) {
    const helper = (node, currentDepth) => {
      if (node === null) return -1;
      if (node.value === targetValue) return currentDepth;

      if (targetValue < node.value) return helper(node.left, currentDepth + 1);
      return helper(node.right, currentDepth + 1);
    };

    return helper(this.root, 0);
  }

  depthSearch(target, root = this.root) {
    if (!node) return false;
    if (target === root.value) return true;
    return (
      this.heightSearch(target, root.left) ||
      this.heightSearch(target, root.right)
    );
  }

  breadthSearch(target, nodes = [this.root]) {
    if (nodes.length === 0) return false;
    const nextLevel = [];

    for (let node of nodes) {
      if (node.value === target) return true;
      if (!!node.left) nextLevel.push(node.left);
      if (!!node.right) nextLevel.push(node.right);
    }

    return this.breadthSearch(target, nextLevel);
  }

  isBalanced(node = this.root) {
    const checkIsBalanced = (node = this.root) => {
      if (!node) return 0;

      const leftHeight = checkIsBalanced(node.left);
      const rightHeight = checkIsBalanced(node.right);

      if (leftHeight === -1 || rightHeight === -1) return -1;
      if (Math.abs(leftHeight - rightHeight) > 1) return -1;
      return 1 + Math.max(leftHeight, rightHeight);
    };
    return checkIsBalanced(node) !== -1;
  }

  balance() {
    const buildBalance = (arr, start, end) => {
      if (start > end) return null;
      const mid = Math.floor((start + end) / 2);
      const node = new Node(arr[mid]);
      node.left = buildBalance(arr, start, mid - 1);
      node.right = buildBalance(arr, mid + 1, end);
      return node;
    };

    const values = this.inOrderTraversal(this.root);
    this.root = buildBalance(values, 0, values.length - 1);
  }

  lowestCommonAncestor(p, q, node = this.root) {
    if (!node) return null;

    if (p < node.value && q < node.value)
      return this.lowestCommonAncestor(p, q, node.left);

    if (p > node.value && q > node.value)
      return this.lowestCommonAncestor(p, q, node.right);

    return node;
  }

  serialize(node = this.root) {
    if (!node) return "X";
    const left = this.serialize(node.left);
    const right = this.serialize(node.right);
    return `${node.value},${left},${right}`;
  }

  deserialize(data = "") {
    const nodes = data.split(",");
    let index = 0;

    const helper = () => {
      if (nodes[index] === "X") {
        index++;
        return null;
      }
      const node = new Node(parseInt(nodes[index]));
      index++;
      node.left = helper();
      node.right = helper();
      return node;
    };

    return helper();
  }
}

/*
// NON-BST
// Build the tree:
//        1
//      /   \
//     2     3
//    / \
//   4   5

const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log(tree.searchIterative(3).value); // 3?
console.log(tree.inOrderIterative()); // [ 4, 2, 5, 1, 3 ]
console.log(tree.preOrderIterative()); // [1, 2, 3, 4, 5]

console.log(tree.inOrderTraversal()); // [1, 2, 3, 4, 5]
console.log(tree.preOrderTraversal()); // [1, 2, 3, 4, 5]

console.log(tree.postOrderIterative()); //[ 4, 5, 2, 3, 1 ]
console.log(tree.postOrderTraversal()); // [ 4, 5, 2, 3, 1 ]

console.log(tree.getHeightRecursive());
*/

/*
        10      -> 0
       /  \
      5    15   -> 1
     / \
    3   7       -> 2

// BST
const tree = new Tree();
tree.insertIterative(10);
tree.insertIterative(5);
tree.insertIterative(15);
tree.insertIterative(3);
tree.insertIterative(7);
console.log(tree.getNodeDepthRecursive(3)); // 2
*/

/*
        10
       /  \
      5    15
     / \
    3   7
    // BST
  const tree = new Tree();
  tree.insertIterative(10);
  tree.insertIterative(5);
  tree.insertIterative(11);
  tree.insertIterative(3);
  tree.insertIterative(7);
  console.log(tree.depthSearch(3)); // 2
*/

/*
          10
        /    \
       5      15
     /  \    /   \
   3     7  13   16
 /  \   / \ 
2   4  6  8

const tree = new Tree();
tree.insertIterative(10);
tree.insertIterative(5);
tree.insertIterative(15);
tree.insertIterative(3);
tree.insertIterative(7);
tree.insertIterative(2);
tree.insertIterative(4);
tree.insertIterative(6);
tree.insertIterative(8);
tree.insertIterative(16);
tree.insertIterative(13);

console.log(tree.breadthSearch(11));

*/

/* 
isBalanced and balance tree
const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.left = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.left = new Node(5);

console.log(tree.isBalanced());
tree.balance();
console.log(tree.isBalanced());
*/

/*
          10
        /    \
       5      15
     /  \    /   \
   3     7  13   16
 /  \   / \ 
2   4  6  8
*/

/*
const tree = new Tree();
tree.insertIterative(10);
tree.insertIterative(5);
tree.insertIterative(15);
tree.insertIterative(3);
tree.insertIterative(7);
tree.insertIterative(2);
tree.insertIterative(4);
tree.insertIterative(6);
tree.insertIterative(8);
tree.insertIterative(16);
tree.insertIterative(13);

tree.printTree();
console.log(tree.lowestCommonAncestor(6, 8));
tree.balance();
tree.printTree();
console.log(tree.lowestCommonAncestor(6, 8));
*/

const tree = new Tree();
tree.insertIterative(10);
tree.insertIterative(5);
tree.insertIterative(15);
tree.insertIterative(3);
tree.insertIterative(7);
tree.insertIterative(2);
tree.insertIterative(4);
tree.insertIterative(6);
tree.insertIterative(8);
tree.insertIterative(16);
tree.insertIterative(13);
tree.printTree();
const serialized = tree.serialize();
const newTree = tree.deserialize(serialized);
tree.printTree(newTree);
