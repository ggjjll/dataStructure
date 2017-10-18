let QueueNode = require('./QueueNode');

class Queue {
  constructor() {
    let nullNode = new QueueNode(null);
    this.front = nullNode;
    this.after = nullNode;
  }

  isEmpty() {
    return this.front === this.after;
  }

  // 入队
  push(value) {
    let node = new QueueNode(value, null, this.after);
    if (this.isEmpty()) {
      this.front = node;
      this.after.last = node
    } else {
      node.last = this.after.last;
      this.after.last.next = node;
      this.after.last = node;
    }
    return true;
  }

  // 出队
  pop() {
    //let node = this.after.last;
    //let last = node.last;
    //node.last = null;
    //node.next = null;
    //this.after.last = last;
    //last.next = this.after;
    //return node.value;
    let node = this.front;
    this.front = node.next;
    node.last = null;
    node.next = null;
    return node.value;
  }
}

module.exports = Queue;
