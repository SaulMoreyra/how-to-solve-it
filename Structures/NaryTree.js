class NaryNode {
  value = null;
  children = [];
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// this tree is going to work only with recursion
class NaryTree {
  constructor() {
    this.root = null;
  }

  printTree(node = this.root) {
    const printTreeHelper = (node, prefix, lastChild = false) => {
      if (!node) return;

      console.log(prefix + (!lastChild ? "├── " : "└── ") + node.value);
      const newPrefix = prefix + (!lastChild ? "│   " : "    ");
      for (let index = 0; index < node.children.length; index++) {
        printTreeHelper(
          node.children[index],
          newPrefix,
          index === node.children.length - 1
        );
      }
    };
    printTreeHelper(node, "", true);
  }

  /**
   *
   * @param {NaryNode} node
   * @param {number} target
   * @returns NaryNode | null
   */
  #findNode(node = this.root, target) {
    if (!node) return null;
    if (node.value === target) return node;

    for (const child of node.children) {
      const found = this.#findNode(child, target);
      if (found) return found;
    }
    return null;
  }

  insert(value, parent) {
    const newNode = new NaryNode(value);

    // base case: empty tree
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // second case: search the parent recursively and add the child
    const node = this.#findNode(this.root, parent);
    if (!node) throw new Error("No parent found");
    node.children.push(newNode);
  }

  inOrder(node = this.root) {
    const values = [];
    function transverse(node) {
      if (!node) return;
      values.push(node.value);
      for (const child of node.children) {
        transverse(child);
      }
    }
    transverse(node);
    return values;
  }

  preOrder(node = this.root) {
    const values = [];
    function transverse(node) {
      if (!node) return;
      for (const child of node.children) {
        transverse(child);
      }
      values.push(node.value);
    }
    transverse(node);
    return values;
  }
}

const tree = new NaryTree();
tree.insert(1, null);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 1);
tree.insert(5, 2);
tree.insert(6, 5);
tree.insert(7, 5);
tree.printTree();

console.log(tree.inOrder());
