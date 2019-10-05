//----------------------解构赋值----------------------
let set = new Set().add('a').add('b').add('c');
let [x, y] = set;
console.log(x);         // a
console.log(y);         // b

let [first, ...rest] = set;
console.log(first);     // a
console.log(rest);      // [ 'b', 'c' ]

//----------------------扩展运算符----------------------
var str = 'hello';
console.log([...str]);  // [ 'h', 'e', 'l', 'l', 'o' ]

let arr = [ 'b', 'c' ];
console.log([ 'a', ...arr, 'd' ]);  // [ 'h', 'e', 'l', 'l', 'o' ]
//----------------------yield*----------------------
let generator = function* () {
    yield 1;
    yield* [ 2, 3, 4 ];
    yield 5;
};
var iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
/*
    { value: 1, done: false }
    { value: 2, done: false }
    { value: 3, done: false }
    { value: 4, done: false }
    { value: 5, done: false }
    { value: undefined, done: true }
 */

























