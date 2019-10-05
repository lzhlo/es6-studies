// ---------------------交换变量值--------------------
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x);
console.log(y);
console.log("-----------------------------");
// ---------------------从函数返回多个值--------------------
function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();

function exampleObject() {
    return {
        foo: 1,
        bar: 2
    }
}

let {foo, bar} = exampleObject();
console.log(foo);
console.log(bar);
// ---------------------提取json数据--------------------
let jsonData = {
    id: 42,
    status: 'Ok',
    data: [111, 222]
};
let {id, status, data} = jsonData;
console.log(id, status, data);
// ---------------------遍历Map结构--------------------
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
// map.forEach((key, value) => {
//     console.log(key, value);
// });
for (let [key, value] of map)
    console.log(key, value);
