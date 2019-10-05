require('promise.prototype.finally').shim();

const a1 = new Promise((resolve, reject) => {
    resolve('传递参数');
});

a1
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('111'));
