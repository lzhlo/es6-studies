/*
    如果返回一个对象要用括号括起来
 */
const ac = (x, y) => ({x: x, y: y});

console.log(ac(1, 2));  // { x: 1, y: 2 }

/*
    不需要返回值
 */
let fn = () => void 0;
console.log(fn());
/*
    简化回调函数
 */
console.log([1, 2, 3].map(x => x * x)); // [ 1, 4, 9 ]
/*
    rest结合箭头符号
 */
const headAll = (head, ...tail) => [head, tail];
console.log(headAll(1, 2, 3, 4, 5, 6));
