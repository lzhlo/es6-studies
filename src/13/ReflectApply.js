/*
    Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数
 */
const ages = [11, 33, 12, 54, 18, 96];

const youngest = Reflect.apply(Math.min, Math, ages);
console.log(youngest);  // 11
const oldest = Reflect.apply(Math.max, Math, ages);
console.log(oldest);    // 96
const type = Reflect.apply(Object.prototype.toString, youngest, []);
console.log(type);      // [object Number]