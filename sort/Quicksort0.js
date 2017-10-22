function sort(arr) {
  let length = arr.length;
  if (length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let center = [];
  center[0] = arr[0];
  for (let i = 1; i < length; i ++) {
    if (arr[i] < center[0]) {
      left.push(arr[i]);
    } else if (arr[i] === center[0]) {
      center.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat(center, sort(right));
}

function main() {
  let array = [5,6,2,7,3,1,0,5,7,1];
  console.log(sort(array));
}

main();
