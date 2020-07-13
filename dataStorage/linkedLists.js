function Node(val) {
  this.val = val;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let node = this.head;
    let prev = node;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  shift() {
    if (!this.head) return;
    else {
      let node = this.head.next;
      this.head = node;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return -1;
    if (!this.head) return undefined;
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, value) {
    if (index < 0 || index > this.length) return -1;

    const node = this.get(index);

    node.val = value;

    return node;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return -1;
    if (index === 0) return this.unshift(value);
    const lastNode = this.get(index);
    if (lastNode === this.tail) return this.push(value);
    let current = this.head,
      prev = current,
      count = 0,
      node = new Node(value);

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = node;
    node.next = current;

    this.length++;
    return this;
  }
  remove(index) {
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let elemToRemove = this.get(index);
    if (elemToRemove === this.tail) return this.pop();
    else {
      prev.next = elemToRemove.next;
    }
    this.length--;
    return elemToRemove;
  }
  reverse() {
    let current = this.head,
      next,
      prev = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    this.tail = next;
    return this;
  }
}
const list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push("last");
console.log(list);
// list.unshift("first");
// list.set(0, 15);
// list.insert(4, 12);
list.reverse();
console.log(list);
