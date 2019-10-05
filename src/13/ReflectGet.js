/*
    Reflect.get方法查找并返回target对象的name属性,如果没有改属性,则返回undefined
 */
var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar;
    },
};
var myReceiverObject = {
    foo: 4,
    bar: 4
};
//如果name属性不熟了读取函数(getset),则读取函数的this绑定receiver
console.log(Reflect.get(myObject, 'baz', myReceiverObject));    // 8