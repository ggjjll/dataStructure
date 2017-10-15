let HashNode = require('./HashNode');

class HashMap {
  constructor(size = 100) {
    this.size = size;
    this.map = new Array(size);
  };

  // 哈希函数
  makeHashCode(key) {
    if ('string' !== typeof key) {
      console.warn(`typeof ${key} must be a string`);
      return ;
    }
    let code = 1;
    for (let char of key) {
      code += code * char.charCodeAt();
      code %= this.size;
    }
    return code;
  }

  // 按键值查找
  get(key) {
    let code = this.makeHashCode(key);
    if (!this.map[code]) {
      return undefined;
    }
    let hashNode = this.map[code];
    do {
      if (key === hashNode.key) {
        return hashNode.value;
      }
      hashNode = hashNode.next;
    } while (hashNode.next);
    return undefined;
  }

  // 插入
  push(key, value) {
    let code = this.makeHashCode(key);
    if (this.get(key)) {
      // 修改
      let hashNode = this.map[code];
      do {
        if (key === hashNode.key) {
          hashNode.value = value;
          return true
        }
        hashNode = hashNode.next;
      } while (hashNode.next);
    } else {
      // 插入
      let newNode = new HashNode(key, value);
      let hashNode = this.map[code];
      if (!hashNode) {
        this.map[code] = newNode;
        return true;
      } else {
        do {
          hashNode = hashNode.next;
        } while (hashNode.next);
        hashNode.next = newNode;
        return true;
      }
    }
  }

  // 移除
  remove(key) {
    if (!this.get(key)) {
      // 不存在
      return false;
    } else {
      let code = this.makeHashCode(key);
      let hashNode = this.map[code];
      if (key === hashNode.key) {
        this.map[code] = hashNode.next;
        hashNode.next = null;
        return true;
      }
      do {
        if (hashNode.next && key === hashNode.next.key) {
          let removeNode = hashNode.next;
          hashNode.next = hashNode.next.next;
          removeNode.next = null;
          return true;
        }
        hashNode = hashNode.next;
      } while (hashNode.next);
    }
  }
}

module.exports = HashMap;
