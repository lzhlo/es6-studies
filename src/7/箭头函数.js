
var f = v => v;

var f = () => 5;

var sum = (num1, num2) => num1 + num2;

const full = ({first, last}) => first + " " + last;

var obj = {
    first: '11',
    last: '222'
};
console.log(full(obj));


const isEven = n => n % 2 == 0;
const square = n => n * n;

console.log([ 1, 2, 3 ].map(x => x * x));   // [1 , 4, 9]

//rest参数与箭头函数结合
const numbers = (...nums) => nums;
console.log(numbers(1, 2, 3, 4, 5));    // [ 1, 2, 3, 4, 5 ]

const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 3, 4, 5));


//函数体内的this对象,就是定义时所在的对象,而不是使用时所在的对象  箭头函数没有自己的this

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;
foo.call({id: 42});

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    //箭头函数
    setInterval(() => this.s1++, 1000);
    //普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);  // s1 : 3
setTimeout(() => console.log('s2: ', timer.s2), 3100);  // s2 : 0


//DOM 事件的回调函数封装在一个对象里面
// var handler = {
//     id: '123456',
//     init: function () {
//         document.addEventListener('click',
//             event => this.doSomething(event.type), false)
//     },
//     doSomething: function (type) {
//         console.log('Handling ' + type + ' for ' + this.id);
//     }
// };
//
// handler.init();

function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}

var f = foo.call({id: 1});
var t1 = f.call({id: 2})()();   // id: 1
var t2 = f().call({id: 3})();   // id: 1
var t3 = f()().call({id: 4});   // id: 1


function foo1() {
    setTimeout(() => {
        console.log('args:' . arguments);
    }, 100);
}

foo1(2,4,6,8);  // undefined


let insert = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            //返回字符串首次出现的位置
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});
console.log(insert(2).into([ 1, 3 ]).after(1));

//管道机制
const pipeline = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
console.log(mult2(plus1(5)));