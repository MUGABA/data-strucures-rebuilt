function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function Bst() {
  this.root = null;
  this.insertIterative = (val) => {
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
  this.insertRecursive = (val) => {
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
  this.findIterative = (val) => {
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
  this.findRecursive = (val) => {
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
console.log(bst);
