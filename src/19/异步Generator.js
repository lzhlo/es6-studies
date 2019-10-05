//同步 Generator 函数
function* map(iterable, func) {
    const iter = iterable[ Symbol.iterator ]();
    while (true) {
        const {value, done} = iter.next();
        if (done) break;
        yield func(value);
    }
}

//异步 Generator 函数
async function* map1(iterable, func) {
    const iter = iterable[ Symbol.asyncIterator ]();
    while(true) {
        const {value, done} = await iter.next();
        if (done) break;
        yield func(value);
    }
}