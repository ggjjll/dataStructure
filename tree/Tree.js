let TreeNode = require('./TreeNode');

class Tree {
  constructor(distance) {
    this.root = new TreeNode();
    this.distance = distance;
    this._addChild(this.root);
  }

  getRoot() {
    return this.root;
  }

  _addChild(node) {
    if (node.getDistance() >= this.distance - 1) {
      return null;
    }
    if (!node.getLeft()) {
      let n = node.addLeft();
      this._addChild(n);
    }
    if (!node.getRight()) {
      let n = node.addRight();
      this._addChild(n);
    }
  }
}

module.exports = Tree;