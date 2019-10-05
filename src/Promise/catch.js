const promise = new Promise((resolve, reject) => {
    reject(new Error('test'));
});

promise.catch((error) => console.log(error));

//如果Primise变成resolved再抛错误是无效的