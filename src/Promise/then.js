const a3 = new Promise((resolve, reject) => {
    resolve('哈哈哈');
});
const a2 = new Promise((resolve, reject) => {
    resolve(a3)
});
const a1 = new Promise((resolve, reject) => {
    resolve(a2);
});



a1.then().then().then((value) => console.log(value)).catch((error) => console.log(error));