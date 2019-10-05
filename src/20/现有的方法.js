class Widget {
    foo(baz) {
        this._bar(baz);
    }
    _bar(baz) {
        return this.snaf = baz;
    }
}
//----------------------私有方法----------------------
const bar = Symbol('bar');
const snaf = Symbol('snaf');
export default class myClass {
    //共有方法
    foo(baz) {
        this[bar](baz);
    }
    //私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }
}