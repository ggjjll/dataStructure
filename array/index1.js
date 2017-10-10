var data1 = require('./data1');

// 去掉重复元素
function eliminatesDuplicate(array) {
  let newArray = [];
  let newArrayLength = 0;
  for (let num of array) {
    if (!isInArray(num, newArray)) {
      newArray[newArrayLength ++] = num;
    }
  }
  return newArray;
}

// 判断数组中是否含有某值
function isInArray(number, array) {
  for (let num of array) {
    if (num === number) {
      return true;
    }
  }
  return false;
}

// 排序[冒泡]
function sort(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i ++) {
    for (let j = i + 1; j < length; j ++) {
      if (array[i] > array[j]) {
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
    }
  }
  return array;
}

// 去重并排序
function eliminatesAndSort(array) {
  let newArray = [];
  for (let num of array) {
    addIntoNewArray(num)
  }
  return newArray;

  // 添加进数组
  function addIntoNewArray(num) {
    let length = newArray.length;
    if (length <= 0) {
      newArray[0] = num;
      return ;
    }
    if (num < newArray[0]) {
      // 插入前面
      for (let j = length; j >= 1; j --) {
        newArray[j] = newArray[j - 1];
      }
      newArray[0] = num;
      return ;
    }
    if (num > newArray[length - 1]) {
      newArray[length] = num;
      return ;
    }
    for (let i = 0; i < length; i ++) {
      if (num === newArray[i]) {
        return ;
      }
      if (i < length - 1 && num > newArray[i] && num < newArray[i + 1]) {
        // 插入其中
        for (let j = length; j > i + 1; j --) {
          newArray[j] = newArray[j - 1];
        }
        newArray[i + 1] = num;
        return ;
      }
    }
  }
}

function main() {
  // 先去重后排序
  console.time('先去重后排序');
  let newArray0 = sort(eliminatesDuplicate(data1));
  console.log(newArray0);
  console.timeEnd('先去重后排序');
  // 边排序边去重
  console.time('边排序边去重');
  let newArray1 = eliminatesAndSort(data1);
  console.log(newArray1);
  console.timeEnd('边排序边去重');
}

main();
