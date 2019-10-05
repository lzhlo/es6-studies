var fs = require('fs');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        })
    })
};

var asyncReadFile = async function () {           // * 替换成 async
    var f1 = await readFile('fstab');   // yield替换成 await
    var f2 = await readFile('shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

//var co = require('co');
//co(gen);    //自动执行了所有 yield
asyncReadFile();   // 内置了执行器
