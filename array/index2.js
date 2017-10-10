var data1 = require('./data1');

// 统计并排序
function statisticsAndSort(array) {
  let newArray = [];
  for (let num of array) {
    addIntoNewArray(num)
  }
  return sortByMach(newArray);

  // 添加进数组
  function addIntoNewArray(num) {

    let length = newArray.length;
    if (length <= 0) {
      newArray[0] = {num, mach: 0};
      return ;
    }
    if (num < newArray[0].num) {
      // 插入前面
      for (let j = length; j >= 1; j --) {
        newArray[j] = newArray[j - 1];
      }
      newArray[0] = {num, mach: 0};
      return ;
    }
    if (num > newArray[length - 1].num) {
      newArray[length] = {num, mach: 0};
      return ;
    }
    if (num === newArray[0].num) {
      newArray[0].mach ++;
      return;
    }
    if (num === newArray[length - 1].num) {
      newArray[length - 1].mach ++;
      return;
    }
    // 二分查找
    let start = 0;
    let end = length;
    while (end !== start && end - start != 1) {
      let index = parseInt((end - start) / 2) + start;
      if (num === newArray[index].num) {
        newArray[index].mach ++;
        return ;
      }
      if (num < newArray[index].num) {
        end = index;
      } else {
        start = index;
      }
    }
    // 没找到
    for (let i = length; i >= end + 1; i --) {
      newArray[i] = newArray[i - 1];
    }
    newArray[end] = {num, mach: 0};
  }

  // 按出现次数排序
  function sortByMach(array) {
    let length = array.length;
    for (let i = 0; i < length - 1; i ++) {
      // console.log(array[i]._mach);
      for (let j = i + 1; j < length; j ++) {
        if (array[i].mach > array[j].mach) {
          let t = array[i];
          array[i] = array[j];
          array[j] = t;
        }
      }
    }
    return array;
  }
}

// 抽离num
function getNumArr(array) {
  let length = array.length;
  let newArray = [];
  for (let i = 0; i < length; i ++) {
    newArray[i] = array[i].num;
  }
  return newArray;
}

// 获取最少出现次数的数
function getMachMin(array) {
  let newArray = [];
  let length = 0;
  for (let i = 0; ; i++) {
    if (array[0].mach !== array[i].mach) {
      return newArray;
    }
    newArray[length ++] = array[i].num;
  }
}

// 获取最多出现次数的数
function getMachMax(array) {
  let newArray = [];
  let length = 0;
  let arr_length = array.length;
  for (let i = arr_length - 1; ; i--) {
    if (array[arr_length - 1].mach !== array[i].mach) {
      return newArray;
    }
    newArray[length ++] = array[i].num;
  }
}

function main() {
  let newArray = statisticsAndSort(data1);
  console.log(getNumArr(newArray));
  console.log('出现次数最少', getMachMin(newArray));
  console.log('出现次数最多', getMachMax(newArray));
}

main();

