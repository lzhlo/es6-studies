/*
    删除对象的属性
 */
const myObj = {
    foo: 'bar'
};
console.log(Reflect.deleteProperty(myObj, 'foo'));