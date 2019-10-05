let mySymbol = Symbol();
let a = {};
a[mySymbol] = 'Hello';
/*
    Symbol不能使用.运算符
    在对象内部使用Symbol值定义属性时,Symbol值必须放在方括号中
 */

let s = Symbol();
let obj = {
    [s](arg) {
        return arg;
    }
};
console.log(obj[s](11));