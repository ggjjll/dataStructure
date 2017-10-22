let StackNode = require('./StackNode');

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return null === this.top;
  }

  // 入栈
  push(value) {
    let node = new StackNode(value);
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return true;
  }

  // 出栈
  pop() {
    let node = this.top;
    this.top = node.next;
    node.next = null;
    return node.value;
  }

  getTop() {
    return this.top.value;
  }
}

module.exports =  Stack;
