let Stack = require('./Stack');

let stack = new Stack();

// 计算整数二进制
let num = 987654321;
let hex = 2;
do {
  let mod = num % hex;
  num = parseInt(num / hex);
  stack.push(mod);
} while (num);

let result = '';
while (!stack.isEmpty()) {
  result += stack.pop();
}
console.log(result);
