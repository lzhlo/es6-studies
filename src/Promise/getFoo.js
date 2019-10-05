function getFoo() {
    return new Promise((resolve, reject) => {
        resolve('foo');
    });
}

const g = function* () {
    try {
        const foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};
function run(generator) {
    const it = generator();
    function go(result) {
        if (result.done) return result.value;
        return result.value.then(value => {
            return go(it.next(value));
        }, error => {
            return go(it.throw(error));
        });
    }
    go(it.next());
}

run(g);