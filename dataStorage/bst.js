function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

class Bst {
  constructor() {
    this.root = null;
  }
  insertIterative = (val) => {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      node.left = null;
      node.right = null;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === val) return undefined;
      if (current.value > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else current = current.left;
      } else if (current.value < val) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else current = current.right;
      }
    }
  };
  insertRecursive = (val) => {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      node.left = null;
      node.right = null;
      return this;
    }
    const self = this.root;
    let current1 = this.root;
    function helper(current, digit) {
      if (current.value > digit) {
        if (current.left === null) {
          current.left = node;
          return self;
        } else helper(current.left, digit);
      } else if (current.value < digit) {
        if (current.right === null) {
          current.right = node;
          return self;
        } else helper(current.right, digit);
      }
    }
    helper(current1, val);
  };
  findIterative = (val) => {
    if (this.root === null) return false;
    let current = this.root;
    if (current.value === val) return true;
    while (true) {
      if (current.value === val) return true;
      if (current.value > val) {
        if (current.left === null) return false;
        else current = current.left;
      } else {
        if (current.right === null) return false;
        else current = current.right;
      }
    }
  };
  findRecursive = (val) => {
    if (this.root === null) return false;
    let node = this.root;

    function lookUp(current, digit) {
      if (current.value === digit) return true;
      if (current.value < digit) {
        if (current.right === null) return false;
        else lookUp(current.right, digit);
      } else {
        if (current.left === null) return false;
        else lookUp(lookUp(current.left, digit));
      }
    }
    lookUp(node, val);
  };
  breadthFirstSearch_bfs() {
    if (!this.root) return [];
    let queue = [this.root],
      result = [],
      node;
    while (queue.length) {
      node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
  dfsPreOrder() {
    if (!this.root) return [];
    let current = this.root,
      result = [];
    function traversePre(node) {
      result.push(node.value);
      if (node.left) traversePre(node.left);
      if (node.right) traversePre(node.right);
    }
    traversePre(current);
    return result;
  }
  dfsPostOrder() {
    if (!this.root) return [];
    let result = [],
      current = this.root;
    function traversePost(node) {
      if (node.left) traversePost(node.left);
      if (node.right) traversePost(node.right);
      result.push(node.value);
    }
    traversePost(current);
    return result;
  }
  dfsInOrder() {
    if (!this.root) return [];
    let result = [],
      current = this.root;

    function traverseIn(node) {
      if (node.left) traverseIn(node.left);
      result.push(node.value);
      if (node.right) traverseIn(node.right);
    }
    traverseIn(current);
    return result;
  }
}

let bst = new Bst();
bst.insertIterative(50);
bst.insertIterative(65);
bst.insertIterative(45);
bst.insertIterative(40);
bst.insertIterative(47);
bst.insertIterative(36);
bst.insertIterative(67);
bst.insertIterative(62);
bst.insertIterative(70);
bst.findIterative(70);
bst.insertRecursive(15);
bst.findIterative(100);
bst.findRecursive(65);
bst.breadthFirstSearch_bfs();
bst.dfsPreOrder();
bst.dfsPostOrder();
bst.dfsInOrder();
