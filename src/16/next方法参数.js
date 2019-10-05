function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) { i = -1 };
    }
}
var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

var b = foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(13));
