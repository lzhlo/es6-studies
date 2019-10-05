console.log("---------------keys--------------");
/**
 *
 * @type {{foo: string, baz: number}}
 */
let obj1 = {foo: 'bar', baz: 42,bac: (x) => x};
console.log(Object.keys(obj1));  //[ 'foo', 'baz' 'bac']

let {keys, values, entries} = Object;
let obj = {a: 1, b: 2, c: 3};
for (let key of keys(obj)) {
    console.log(key);                       // 'a', 'b', 'c'
}
for (let value of values(obj)) {
    console.log(value);                     // 1, 2, 3
}
for (let [key, value] of entries(obj)) {
    console.log([key, value]);              // ['a', 1], ['b', 2], ['c', 3]
}
