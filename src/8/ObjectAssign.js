/**
 * Created by wzp on 2018/3/27.
 */
const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3};

Object.assign(target, source1, source2);
console.log(target);        //{ a: 1, b: 2, c: 3 }

//如果目标对象与源对象同名属性,或多个对象有同名属性,则后面的属性会覆盖前面的属性

const target3 = { a: 1, b: 1 };

const source4 = { b: 2, c: 2 };
const source5 = { c: 3 };

Object.assign(target3, source4, source5);
console.log(target3);       //{ a: 1, b: 2, c: 3 }
console.log("---------------取值函数的处理--------------");
//source6对象的foo属性是一个取值函数，Object.assign不会复制这个取值函数，只会拿到值以后，将这个值复制过去
const source = {
    get foo() { return 1; }
}
const target6 = {};
Object.assign(target6 ,source);
console.log(target6);       //{ foo: 1 }

console.log("---------------常见用途--------------");
console.log("---------------为对象添加属性--------------");
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}
let po = new Point('11', '22');
console.log(po);        // Point { x: '11', y: '22' }
console.log("---------------为对象添加方法--------------");
class SomeClass {}
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {
        return arg1 + arg2;
    },
    anotherMethod() {
        console.log('assign添加的方法');
    }
});
const so = new SomeClass();
console.log(so.someMethod(1, 2));   // 3
so.anotherMethod();                 //assign添加的方法
console.log("---------------合并多个对象--------------");
const merge = (...sources) => Object.assign({}, ...sources);
console.log(merge(target, target3, target6));   // { a: 1, b: 2, c: 3, foo: 1 }
console.log("---------------为属性指定默认值--------------");
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};
function processCoontent(options) {
    options = Object.assign({}, DEFAULTS, options);
    console.log(options);
}
processCoontent({logLevel:999});            //{ logLevel: 999, outputFormat: 'html' }