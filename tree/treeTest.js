let Tree = require('./Tree');
let tree = new Tree(3);

// 深度优先
function dfs() {
  let Stack = require('.././stack/Stack');
  let rootNode = tree.getRoot();
  let stack = new Stack();
  stack.push(rootNode);
  while (!stack.isEmpty()) {
    let top = stack.getTop();
    console.log(top.getValue());
    stack.pop();
    let right = top.getRight();
    if (right) {
      stack.push(right);
    }
    let left = top.getLeft();
    if (left) {
      stack.push(left);
    }
  }
}

// 广度优先搜索
function bfs() {
  let Queue = require('.././queue/Queue');
  let queue = new Queue();
  let rootNode = tree.getRoot();
  queue.push(rootNode);
  while (!queue.isEmpty()) {
    let node = queue.pop();
    console.log(node.getValue());
    let right = node.getRight();
    let left = node.getLeft();
    if (left) {
      queue.push(left);
    }
    if (right) {
      queue.push(right);
    }
  }
}

dfs();
console.log('----------------');
bfs();