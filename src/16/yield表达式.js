function* gen() {
    yield 123 + 456;
}
let g = gen();
console.log(g.next());

//----------------------例子----------------------
var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (a) {
    var lenght = a.length;
    for (var i = 0; i < lenght; i++) {
        var item = a[ i ];
        if (typeof  item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};
for (var f of flat(arr)) {
    console.log(f);
}