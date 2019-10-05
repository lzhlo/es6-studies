const person = {
    sayName() {
        console.log('hello');
    }
};
console.log(person.sayName.name);   // sayName

const obj = {
    get foo() {},
    set foo(x) {}
}
const desciptor = Object.getOwnPropertyDescriptor(obj, 'foo');
//Object.getOwnPropertyDescriptor   //获取该属性的描述对象
console.log(desciptor.get.name);    // get foo
console.log(desciptor.set.name);    // set foo