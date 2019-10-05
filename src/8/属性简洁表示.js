/**
 * Created by wzp on 2018/3/27.
 */

const foo = 'bar';
const baz = {foo};
console.log(baz.foo);

//属性简写
function f(x, y) {
    return {x, y};
}
console.log(f(1, 2));   // { x: 1, y: 2 }

//方法简写
const o = {
    method() {
        return 'Hello!';
    }
};
console.log(o.method());    // Hello!

//简写例子1
let birth = '2000/01/01';
const Person = {
    name: '张三',
    birth,
    hello() {
        console.log('我的名字是：', this.name);
    }
};
Person.hello();                 //我的名字是： 张三
console.log(Person.birth);      //2000/01/01

//简写例子2
function getPoint() {
    const x = 1;
    const y = 10;
    return {x, y};
}
console.log(getPoint());    //{ x: 1, y: 10 }

let ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}
function setItem(key, value) {
    ms[key] = value;
}
function clear() {
    ms = {};
}
module.exports = {getItem, setItem, clear};






















