/*
    不用new创建实例
 */
function Greeting(name) {
    this.name = name;
}
const instance = Reflect.construct(Greeting, ['张三']);
console.log(instance.name); //张三