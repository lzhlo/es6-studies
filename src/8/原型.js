/*

 */
console.log("---------------es6原型--------------");
let proto = {};
let obj = {x: 10};
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

console.log(obj.x);
console.log(obj.y);
console.log(obj.z);

console.log("---------------读取对象的原型对象--------------");
function Rectangle() {}
const rec = new Rectangle();
Object.setPrototypeOf(rec, Object.prototype);
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
console.log("---------------super关键字--------------");
/*
    指向当前对象的原型对象
    super.foo等同于Object.getPrototypeOf(this).foo
 */
const proto1 = {
    foo: 'hello'
};
const obj1 = {
    foo: 'world',
    find()  {
        return super.foo;
    }};
Object.setPrototypeOf(obj1, proto1);
console.log(obj1.find());   // hello

