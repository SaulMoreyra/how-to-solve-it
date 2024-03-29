class SimpleNode {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head;
  tail;
  length;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  #getNode(index) {
    if (index > this.length || index < 0) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current;
      count++;
    }
    return current;
  }

  push(value) {
    const node = new SimpleNode(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current?.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current?.value;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) this.tail = null;
    const current = this.head;
    this.head = current.next;
    this.length--;
    return current.value;
  }

  unshift(value) {
    const current = new SimpleNode(value);
    if (!this.head) this.tail = current;
    else current.next = this.head;

    this.head = current;
    this.length++;
    return this;
  }

  get(index) {
    const foundNode = this.#getNode(index);
    if (foundNode) return foundNode.value;
    return null;
  }

  set(index, value) {
    const foundNode = this.#getNode(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const prev = this.#getNode(index - 1);
    const next = prev?.next;
    const newNode = new SimpleNode(value);

    prev.next = newNode;
    newNode.next = next;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return !!this.shift();

    const prev = this.#getNode(index - 1);
    const removed = prev.next;
    prev.next = removed.next;

    this.length--;
    return removed?.value;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

(function main() {
  const list = new SinglyLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.push(6);
  console.log(list.toArray());
  console.log(list.reverse());
  console.log(list.toArray());
})();
