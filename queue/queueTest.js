let Queue = require('./Queue');

let queue = new Queue();

// 小数进制转换
let num = 0.71828;
let hex = 2;
let threshold = 0.000001;
let size = 0;
const SIZE_MAX = 50;

do {
  let newNum = num * hex;
  let integer = parseInt(newNum);
  num = newNum - integer;
  queue.push(integer);
  size ++;
} while (Math.abs(num - 1) >= threshold && size < SIZE_MAX);

let result = '0.';
while (!queue.isEmpty()) {
  result += queue.pop();
}

console.log(result);