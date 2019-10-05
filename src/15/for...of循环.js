const arr = [ 'red', 'green', 'blue' ];
for (let v of arr) {
    console.log(v);
}
const obj = {};
obj[ Symbol.iterator ] = arr[ Symbol.iterator ].bind(arr);

for (let v of obj) {
    console.log(v);
}
//----------------------代替数组实例的forEach方法----------------------
const arr1 = ['red', 'green', 'blue'];
arr1.forEach(function (element, index) {
    console.log(element);
    console.log(index);
});
/*
    red
    0
    green
    1
    blue
    2
 */
var arr2 = ['a', 'b', 'c', 'd'];
for (let a of arr2) {
    console.log(a);
}
/*
    a
    b
    c
    d
 */
