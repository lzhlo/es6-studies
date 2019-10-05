const s = new Set();
s.add(1).add(2).add(3).add('2').add(2);
console.log(s.size);    // 4

console.log(s.has(1));  // true
console.log(s.has(2));  // true
console.log(s.has(10)); // false

s.delete(2);
console.log(s.has(2));  // false

/*
    Array.from 将Set结构转换为数组
 */
const items1 = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items1);
console.log(array);     // [ 1, 2, 3, 4, 5 ]