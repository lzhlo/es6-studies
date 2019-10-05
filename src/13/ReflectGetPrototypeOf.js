/*
    读取对象的__proto__
 */
function FancyThing() {
}
const myObj = new FancyThing();

console.log(Reflect.getPrototypeOf(myObj) === FancyThing.prototype);    // true