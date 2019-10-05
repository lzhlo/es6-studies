const promise = new Promise((resolve, reject) => {
    throw new Error('抛出异常信息');
});
promise.catch((error) => {
    console.log(error);
});

