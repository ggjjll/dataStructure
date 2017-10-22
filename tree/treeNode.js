class TreeNode {
  constructor (distance = 0, value = parseInt(Math.random() * 100)) {
    this.distance = distance;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft() {
    this.left = new TreeNode (this.distance + 1);
    return this.left;
  }

  addRight() {
    this.right = new TreeNode (this.distance + 1);
    return this.right;
  }

  getValue() {
    return this.value;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  getDistance() {
    return this.distance;
  }
}

module.exports = TreeNode;
