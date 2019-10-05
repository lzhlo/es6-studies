/*
    1.创建一个指针对象,指向当前数据解构的起始位置也就是说，遍历器对象本质上，就是一个指针对象。
    2.第一次调用指针对象的next方法,可以将指针执行数据解构的第一个成员
    3.第二次调用指针对象的next方法,指针就指向数据解构的结束位置
    4.不断调用指针对象的next方法,知道它指向数据解构的结束位置
 */
var it = makeIterator(['a', 'b']);
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: undefined, done: true }


function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true}
        }
    }
}
//----------------------无限运行的遍历器----------------------
var it1 = idMaker();
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
function idMaker() {
    var index = 0;
    return {
        next: function () {
            return {value: index++, done: false}
        }
    }
}
