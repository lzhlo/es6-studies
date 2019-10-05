var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});
obj.count = 1;              // setting count!
console.log(++obj.count);   // getting count! setting count! 2

console.log("---------------拦截读取行为例子--------------");
var proxy = new Proxy({}, {
    get: function (target, property) {
        return 35;
    }
});
console.log(proxy.time);    // 35
console.log(proxy.name);    // 35
console.log(proxy.title);   // 35

console.log("---------------如果没有被拦截,那就等于直接通向原对象--------------");
const target = {};
const handle = {};
const proxy1 = new Proxy(target, handle);
proxy1.a = 'b';
console.log(target.a);      // 'b'
