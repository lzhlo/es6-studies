function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
//console.log(g.next());      // { value: 3, done: false }
//console.log(g.next(2));     // { value: 2, done: true }


function* gen1(x) {
    try {
        var y = yield x + 2;
    } catch (e) {
        console.log(e)
    }
    return y;
}

var g1 = gen(1);
g1.next();
g1.throw('出错了');