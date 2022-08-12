class SimpleNode<T extends Object> {
  value: T;
  next: SimpleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList<T extends Object> {
  head?: SimpleNode<T> | null;
  tail?: SimpleNode<T> | null;
  length: number;

  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  push(value: T): SinglyLinkedList<T> {
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
    this.tail!.next = null;
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

  unshift(value: T) {
    const current = new SimpleNode(value);
    if (!this.head) this.tail = current;
    else current.next = this.head;

    this.head = current;
    this.length++;
    return this;
  }

  #getNode(index: number) {
    if (index > this.length || index < 0) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current;
      count++;
    }
    return current;
  }

  get(index: number) {
    const foundNode = this.#getNode(index);
    if (foundNode) return foundNode.value;
    return null;
  }

  set(index: number, value: T) {
    const foundNode = this.#getNode(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // insert(index: number, value: T){
  //   if(index < 0) return false;
  //   if(index )
  // }
}

(function main() {
  const list = new SinglyLinkedList<number>();
  list.push(1);
  list.push(2);
  list.push(3);
  list.set(0, 1000);
  console.log(list);
})();
