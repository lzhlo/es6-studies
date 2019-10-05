const  MyClass = class Me {
    getClassName() {
        return Me.name;
    }
}
let inst = new MyClass();
console.log(inst.getClassName());

let person = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');

person.sayName();










