let array = [5,6,2,7,3,1,0,5,7,1];

function sort(from, to) {
  let p0 = from;
  let p1 = to - 1;
  if (Math.abs(p0 - p1) <= 1) {
    return ;
  }
  while (Math.abs(p0 - p1) >= 1) {
    if ((p0 < p1 && array[p0] > array[p1]) || (p0 > p1 && array[p0] < array[p1])) {
      // 交换
      let t = array[p0];
      array[p0] = array[p1];
      array[p1] = t;
      t = p0;
      p0 = p1;
      p1 = t;
    }
    if (Math.abs(p0 - p1) === 1) {
      break ;
    }
    if (p1 > p0) {
      -- p1;
    } else {
      ++ p1;
    }
  }
  let p = p0 < p1 ? p1 : p0;
  sort(from, p);
  sort(p, to);
}

function main() {
  let length = array.length;
  sort(0, length);
  console.log(array);
}

main();
