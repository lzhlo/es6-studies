/**
 * Created by wzp on 2018/3/3.
 */
'use strict';

//let {foo, bar} = { bar : 'bbb', foo : 'aaa'};

/*对象解构赋值次序不一致但对取值完全没有影响*/
/*对象解构赋值原理*/
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };

/*嵌套结构对象*/
let obj = {
    p: [
        "hello",
            {y: 'World'}
    ]
};
let {p: [x, {y}]} = obj;
// x => hello
// y => world

const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let {loc, loc: {start}, loc: {start : { line }}} = node;
// line =>  1
// start => { line: 1, column: 5 }
// loc =>   { start: { line: 1, column: 5 } }

/*字符串构造赋值*/
const [a, b, c, d, e] = 'hello';
console.log(a); // h
console.log(b); // e
console.log(c); // l
console.log(d); // l
console.log(e); // o

/*函数参数解构赋值*/
function add([x, y]) {
    return x + y;
}
console.log(add([1, 2]));   // 3

console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));   // [3, 7]

/*函数参数解构使用默认值*/
/*undefined会触发函数参数的默认值*/
function move({x = 0, y = 0} = {}) {
    return [x, y];
}

console.log(move({x: 3, y: 8}));    //[ 3, 8 ]
console.log(move({x: 3}));          //[ 3, 0 ]

function move1({x, y} = {x: 0, y: 0}) { //此处是为函数move的参数指定默认值,而不是为变量x y 指定默认值
    return [x, y];
}

console.log(move1({x: 3, y: 8}));   //[ 3, 8]
console.log(move1({x: 3}));         //[ 3, undefined ]

