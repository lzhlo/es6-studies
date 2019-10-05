const obj = {
    [ Symbol.iterator ]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};
let a = obj[Symbol.iterator]();
console.log(a.next());

let arr = [ 'a', 'b', 'c' ];
let iter = arr[ Symbol.iterator ]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
/*
    一个对象如果要具备可被for...of循环调用的 Iterator 接口，就必须在Symbol.iterator的属性上部
    署遍历器生成方法（原型链上的对象具有该方法也可）
 */
class RangeIterator {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }
    //Symbol.iterator属性对应一个函数，执行后返回当前对象的遍历器对象
    [Symbol.iterator]() {
        return this;
    }
    next () {
        var value = this.value;
        if (value < this.stop) {
            this.value++;
            return {done: false, value: value};
        }
        return {done: true, value: undefined};
    }
}
function range(start, stop) {
    return new RangeIterator(start, stop);
}
for (var value of range(0, 3)) {
    console.log(value);
}
//----------------------实现指针解构----------------------
function Obj(value) {
    this.value = value;
    this.next = null;
}

Obj.prototype[ Symbol.iterator ] = function () {
    var iterator = {next: next};
    var current = this;
    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return {done: false, value: value};
        } else {
            return {done: true};
        }
    }
    return iterator;
};
var one = new Obj(1);
var tow = new Obj(2);
var three = new Obj(3);

one.next = tow;
tow.next = three;

for (var i of one) {
    console.log(i);
}
/*
    1
    2
    3
 */
//----------------------为对象添加Iterator接口----------------------
let obj1 = {
    data: [ 'hello', 'world' ],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[ index++ ]
                    };
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
}
let c = obj1[Symbol.iterator]();
console.log(c.next());
console.log(c.next());
console.log(c.next());
//----------------------类似数组的对象调用数组----------------------
/*
对于类似数组的对象（存在数值键名和length属性），部署 Iterator 接口，
有一个简便方法，就是Symbol.iterator方法直接引用数组的 Iterator 接口
 */
let iterable1 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [ Symbol.iterator ]: Array.prototype[ Symbol.iterator ]
};
for (let item of iterable1) {
    console.log(item);
} 











