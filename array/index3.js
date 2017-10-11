let {arr1, arr2} = require('./data2');

// 求交集
function getIntersection(arr1, arr2) {
  let newArray = [];
  let length = 0;
  let start = 0;
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  for (let i = 0; i < arr1Length; i ++) {
    for (let j = start; j < arr2Length; j ++) {
      if (arr1[i] === arr2[j]) {
        newArray[length ++] = arr1[i];
        start = j;
        break ;
      }
      if (arr1[i] < arr2[j]) {
        start = j;
        break ;
      }
    }
  }
  return newArray;
}

// 求并集
function getCollection(arr1, arr2) {
  let newArray = [];
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  for (let i = 0; i < arr1Length; i ++) {
    newArray[i] = arr1[i];
  }
  for (let i = 0; i < arr2Length; i ++) {
    newArray[arr1Length + i] = arr2[i];
  }
  return eliminatesAndSort(newArray);
}

// 求补集
function getComplement(arr1, arr2) {
  let newArray = [];
  let length = 0;
  let start = 0;
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  for (let i = 0; i < arr1Length; i ++) {
    for (let j = start; j < arr2Length; j ++) {
      if (arr1[i] === arr2[j]) {
        start = j;
        break ;
      }
      if (arr1[i] < arr2[j]) {
        start = j;
        newArray[length ++] = arr1[i];
        break ;
      }
    }
  }
  return newArray;
}



function main() {
  let map1 = eliminatesAndSort(arr1);
  // console.log(map1);
  let map2 = eliminatesAndSort(arr2);
  // console.log(map2);
  let intersection = getIntersection(map1, map2);
  console.log(intersection);
  let collection = getCollection(map1, map2);
  console.log(collection);
  let complement = getComplement(map1, map2);
  console.log(complement);
}
main();

// ///////////////////////////////////////////////////
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
