/*
    Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象
 */
var myObject = {};
Object.defineProperty(myObject, 'hidden', {
    value: true,
    enumerable: false
});

var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');
console.log(theDescriptor);
/*
    { value: true,
      writable: false,
      enumerable: false,
      configurable: false }
 */