/*
    返回对象的所有属性
 */
var myObject = {
    foo: 1,
    bar: 2,
    [Symbol.for('baz')]: 3,
    [Symbol.for('bing')]: 4
};
console.log(Reflect.ownKeys(myObject)); //[ 'foo', 'bar', Symbol(baz), Symbol(bing) ]