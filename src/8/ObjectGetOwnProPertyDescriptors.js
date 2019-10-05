/**
 * Created by wzp on 2018/3/28.
 */

const obj = {
    foo: 123,
    get bar() { return 'abc' }
};
console.log(Object.getOwnPropertyDescriptors(obj));
/*
 {    foo:
     {
         value: 123,
         writable: true,
         enumerable: true,
         configurable: true
     },
     bar:
         {
             get: [Function: get bar],
             set: undefined,
             enumerable: true,
             configurable: true
         }
 }
 */

// getOwnPropertyDescriptors 方法的引入目的,主要是未了解决Object.assign()无法正确拷贝get属性和set属性的问题

const source = {
    set foo(value) {
        console.log(value);
    }
};
const target = {};

Object.assign(target, source);

console.log(Object.getOwnPropertyDescriptor(target, 'foo'));
/*
 {
     value: undefined,
     writable: true,
     enumerable: true,
     configurable: true
 }
 */


const source1 = {
    set foo(value) {
        console.log(value);
    }
};
const target2 = {};
//
// Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source1));
// console.log(Object.getOwnPropertyDescriptor(target2, 'foo'));
/*
 {
    get: undefined,
     set: [Function: set foo],
     enumerable: true,
     configurable: true
 }
 */

const shallowMerge = (target10, source10) => Object.defineProperties(
    target10,Object.getOwnPropertyDescriptors(source10)
);
console.log(shallowMerge(target2, source1));
/*
    { foo: [Setter] }
 */
const clone1 = {
    ac: (x) => x * x,
    val: 111,
    get val() {
        return this.val;
    },
    set val(val) {
        this.val = val;
    }
};
const temp = {};

console.log("---------------将对象属性克隆到一个新对象--------------");
const clone = Object.create(Object.getPrototypeOf(temp), Object.getOwnPropertyDescriptors(clone1));
console.log(clone);         //{ ac: [Function: ac], val: [Getter/Setter] }