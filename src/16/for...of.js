function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
for (let v of foo()) {
    console.log(v);
}
//----------------------斐波那契数列----------------------
function* fibonacci() {
    let [ prev, curr ] = [ 0, 1 ];
    for (;;) {
        [ prev, curr ] = [ curr, prev + curr ];
        yield curr;
    }
}
for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
}