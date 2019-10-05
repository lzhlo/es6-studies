/**
 * Created by wzp on 2018/3/27.
 */

/*
    同值相等
    ==  : 缺点 会自动转换数据类型
    === : 缺点 NaN不等于自身 +0 等于 -0
 */
console.log(Object.is('foo', 'foo'));   // true
console.log(Object.is({}, {}));         // false
console.log(+0 === -0);                 // true
console.log(NaN === NaN);               // false
console.log(Object.is(+0, -0));         // false
console.log(Object.is(NaN, NaN));       // true