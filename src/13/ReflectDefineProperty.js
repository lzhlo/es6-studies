/*
    为对象定义属性
 */
function MyDate() {}

Reflect.defineProperty(MyDate, 'now', {
    value: () => Date.now()
});
console.log(MyDate.now());  // 1522722720617

console.log("---------------Proxy.defineProperty配合使用--------------");
const p = new Proxy({}, {
    deleteProperty: (target, prop, desciptor) => {
        console.log(desciptor);
        return Reflect.defineProperty(target, prop, desciptor);
    }
});

p.foo = 'bar';
console.log(Reflect.getOwnPropertyDescriptors(p));
/*
    { foo:
   { value: 'bar',
     writable: true,
     enumerable: true,
     configurable: true } }
 */
console.log(p.foo);     // 'bar'