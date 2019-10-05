function timeout(ms) {
    return new Promise(((resolve, reject) => {
        console.log('新建后立即执行');
        setTimeout(resolve, ms, 'done')
    }));
}

timeout(100).then((value) => {
    console.log(value);
});

let promise = new Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
});

promise.then(() => {
    console.log('resolved.');   // 当前同步任务执行完才会执行
});

console.log('Hi');