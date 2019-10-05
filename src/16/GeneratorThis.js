function* g() {};
g.prototype.hello = function () {
    return 'hi';
};
let obj = g();
console.log(obj instanceof g);
console.log(obj.hello());

function* g1() {
    this.a = 11;
}

let obj1 = g1();
console.log(obj1.next());
console.log(obj1.a);

function* gen() {
    this.a = 1
    yield this.b = 2;
    yield this.c = 3;
}
function F() {
    return gen.call(gen.prototype);
}
var f = new F();
console.log(f.next());
console.log(f.next());
console.log(f.next());

console.log(f.a);
console.log(f.b);
console.log(f.c);