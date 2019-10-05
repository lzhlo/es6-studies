const p1 = new Promise((resolve, reject) => {

});
const p2 = new Promise((resolve, reject) => {

});
const p3 = new Promise((resolve, reject) => {

});
const p = Promise.all([ p1, p2, p3 ]); //将多个Promise包装成一个新的Promise实例
// p 的状态由 p1 p2 p3决定
// 只有 p1 p2 p3 的状态都编程fulfilled p的状态才会变成fulfilled p1 p2 p3的返回值组成一个数组
// 只有 p1 p2 p3 之中有一个rejected p 的状态就编程rejected, 此时返回第一个被reject的实例的返回值



const promises = [ 2, 3, 4, 5, 6 ].map((id) => {
    return new Promise((resolve, reject) => {
        resolve(Math.round(Math.random() * 100));
        console.log(id);
    });
});

Promise.all(promises).then((posts) => {
    console.log(posts);
});
// [ 17, 56, 38, 84, 20 ]