let HashMap = require('./HashMap');

let hashMap = new HashMap();
hashMap.push('abc', 123);
hashMap.push('abc', 456);
hashMap.push('def', 789);
hashMap.remove('def');
console.log(hashMap.get('def'));
