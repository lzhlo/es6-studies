/**
 *
 * Created by wzp on 2018/3/3.
 */

'use strict';
/*const常量*/
/*
    常量一旦声明就不能改变
    常量一旦声明就必须立即初始化
    const作用域与let相同,只有声明在所在的块级作用域内有效
    声明的常量也是不提升的,同样存在暂时性死区
    常量只能保证对象和数组的指针是固定的.它所指向的数据结果购是可变的
* */

const a = [];
a.push('123');
a.length = 0;

const foo = {};
foo.prop = 123;
console.log(foo.prop); // 123


/*将对象冻结（不可改变数据结构*/
const foo1 = Object.freeze({});

//foo1.prop = 123; 严格模式下报错
