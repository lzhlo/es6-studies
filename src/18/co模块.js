var fs = require('fs');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);　
        })
    })
};

var gen = function* () {
    var f1 = yield readFile('fstab');
    var f2 = yield readFile('shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

var co = require('co');
co(gen);    //自动执行了所有 yield

var g = gen();
g.next().value.then(function (data) {       //手动执行
    g.next(data).value.then(function (data) {
        g.next(data);
    })
});

function run(gen) {
    var g = gen();
    function next(data) {
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function (data) {
            next(data);
        })
    }
    next();
}

run(gen);