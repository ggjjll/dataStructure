class QueueNode {
  constructor(value, last = null, next = null) {
    this.value = value;
    this.next = next;
    this.last = last;
  }
}

module.exports = QueueNode;
