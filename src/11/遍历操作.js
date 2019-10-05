/*
    ... 内部使用for...of循环
 */
let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
    console.log(item);
}
/*
    red
    green
    blue
 */
for (let item of set.values()) {
    console.log(item);
}
/*
    red
    green
    blue
 */
for (let item of set.entries()) {
    console.log(item);
}
/*
    [ 'red', 'red' ]
    [ 'green', 'green' ]
    [ 'blue', 'blue' ]
 */
set.forEach((value, key) => console.log(key + ' : ' + value));
/*
    red : red
    green : green
    blue : blue
 */
console.log("---------------...运算符和Set结合--------------");
let set1 = new Set([3, 5, 2, 2, 5, 5]);
let arr = [...set];
console.log(arr);       // [ 'red', 'green', 'blue' ]