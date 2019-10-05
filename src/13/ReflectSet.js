/*
    Reflect.set方法设置target对象的name属性等于value
 */
var myObject = {
    foo: 1,
    set bar(value) {
        return this.foo = value;
    }
};
var myReceiverObject = {
    foo: 0
};
console.log(myObject.foo);  // 1
Reflect.set(myObject, 'foo', 2);
console.log(myObject.foo);  // 2
Reflect.set(myObject, 'bar', 3);
console.log(myObject.foo);  // 3
Reflect.set(myObject, 'bar', 4, myReceiverObject);
console.log(myObject.foo);  // 3
console.log(myReceiverObject.foo);  //4
/*
    注意，如果 Proxy 对象和 Reflect 对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver，那么
    Reflect.set会触发Proxy.defineProperty拦截。
 */
let p = {
    a: 'a'
};
let handler = {
    set(target, key, value, receiver) {
        console.log('set');
        Reflect.set(target, key, value, receiver);
    },
    defineProperty(target, key, attribute) {
        console.log('defineProperty');
        Reflect.defineProperty(target, key, attribute);
    }
};
let obj = new Proxy(p, handler);
obj.a = 'A';
// set
// defineProperty