/*
    WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息
    只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失
 */
const foos = new WeakSet();
class Foo {
    constructor() {
        foos.add(this);
    }
    method() {
        if (!foos.has(this)) {
            throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
        }
    }
}
let a = new Foo();
console.log(a.method());