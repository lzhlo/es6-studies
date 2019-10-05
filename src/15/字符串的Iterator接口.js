var someString = 'hi';
console.log(typeof someString[ Symbol.iterator ]);  // function

var iterator = someString[ Symbol.iterator ]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
/*
    { value: 'h', done: false }
    { value: 'i', done: false }
    { value: undefined, done: true }
 */

let myIterable = {
    [ Symbol.iterator ]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};
console.log([ ...myIterable ]);

let obj = {
    * [ Symbol.iterator ]() {
        yield 'hello';
        yield 'world';
    }
};

for (let x of obj) {
    console.log(x);
}
/*
    hello
    world
 */
































