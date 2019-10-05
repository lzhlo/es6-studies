/*
    set不会添加重复值
 */
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
    console.log(i); // 2 3 5 4
}
console.log("---------------例子一--------------");
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);  // [ 1, 2, 3, 4 ]

console.log("---------------例子二--------------");
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);    // 5

console.log("---------------数组去重复--------------");
console.log(...new Set([1, 2, 3, 4, 4]));

