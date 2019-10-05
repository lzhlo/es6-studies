/*
    1.三种状态
        (1) pending:    进行中
        (2) fulfilled   已成功(resolved)
        (3) rejected    已失败
    2.Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数
        then函数支持两个回调函数作为参数
            (1) Promise对象的状态变为resolved时调用
            (2) Promise对象的状态变为rejected时调用
 */
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}
timeout(100).then((value) => {
    console.log(value);
});

let promise = new Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
});
promise.then(() => {
    console.log('resolved.');
});
console.log('Hi');
/*
    Promise
    Hi
    resolved
 */