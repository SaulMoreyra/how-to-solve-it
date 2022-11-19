class DoubleNode<T extends Object> {
  value: T;
  next: DoubleNode<T> | null;
  prev: DoubleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList<T extends Object> {
  head: DoubleNode<T> | null;
  tail: DoubleNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T) {
    const newNode = new DoubleNode<T>(value);
    if (this.length !== 0) {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const node = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = node!.prev;
      this.tail!.next = null;
      node!.prev = null;
    }

    this.length--;

    return node;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead!.next;
      this.head!.prev = null;
      oldHead!.next = null;
    }
    this.length--;
    return oldHead;
  }
}
