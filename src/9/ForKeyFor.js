/*
    Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，
    后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，
    如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是
    调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值
    Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key
 */
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

console.log(s1 === s2); // true

let a1 = Symbol.for('foo');
let a2 = Symbol.keyFor(a1);

console.log(a2);        // foo