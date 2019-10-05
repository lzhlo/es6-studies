//函数length属性 返回未设置默认值的参数个数
console.log((function (a) {}).length);  // 1
console.log((function (a = 0) {}).length);  //0
console.log((function (a, b, c = 5) {}).length);    //2
console.log((function (a, b = 2, c) {}).length);    //2

var x = 1;
function f(x, y = x) {
    console.log(y);
}
f(2);   //2

// 应用
// function throwIfMissing() {
//     throw new Error('你没传参数');
// }
// function foo(nustBeProvided = throwIfMissing()) {
//     return nustBeProvided;
// }
//
// foo();

let fo = 'outer';
function bar(func = () => fo) {
    let fo = 'inner';
    console.log(func());
}

bar();
