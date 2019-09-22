let {bar, foo} = {foo: 'aaa', bar: 'bbb'};
console.log(bar);
console.log(foo);
// 对象解构次序不重要
console.log("-----------------------------");
let {baz} = {bar: 'baz'};
console.log(baz);
// 解构失败值为undefined
console.log("-----------------------------");
let obj = {first: 'hello', last: 'world'};
let {first: f, last: l} = obj;  // 被赋值和赋值的其实是反的 f才是被赋值 first只是模式
console.log(f);
console.log(l);
// 变量名与属性不一致
console.log("-----------------------------");
const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let {loc, loc: {start}, loc: {start: {line}}} = node;
console.log(line);
console.log(loc);
console.log(start);
// 解构复杂的嵌套对象
// 这里有一个很重要的概念 匹配模式 第一个 loc是赋值的变量 第二三个只是匹配模式比如第三个会被解析成
// var line = node.loc.start.line;
console.log("-----------------------------");
