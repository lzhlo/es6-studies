/*
    返回一个布尔值,表示当前对性爱那个是否可扩展
 */
const myObject = {};
console.log(Reflect.isExtensible(myObject));    // true
console.log(Reflect.isExtensible(1));           //报错