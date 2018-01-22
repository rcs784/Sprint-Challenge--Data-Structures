/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newNode = {
      next: null,
      value, 
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } 

    this.tail.next = newNode;
    this.tail = newNode; 
  }

  addToHead(value) {
    const newNode = {
      next: this.head,
      value,
    };

    if (this.head === null) this.tail = newNode;
    this.head = newNode;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
    return this.tail ? this.tail.value : null;
  }

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // need to check if there is a head node
    if (this.head === null) return;
    // check if head has a next
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.next;
    } 
    return false;
  }

  each(cb) {
    let node = this.head;
    while (node !== null) {
      cb(node);
      node = node.next;
    } 
  }

  find(cb) {
    let node = this.head;
    while (node !== null) {
      if (cb(node)) return node;
      node = node.next;
    } 
    return null;
  }
}

module.exports = LinkedList;
