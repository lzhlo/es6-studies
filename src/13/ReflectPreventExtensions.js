/*
    将对象变为一个不可扩展
        返回一个布尔值,表示是否操作成功
 */
var myObject = {};
console.log(Reflect.preventExtensions(myObject));   // true