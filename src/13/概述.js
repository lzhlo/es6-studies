let obj = {
    a: () => 1
};
var loggedObj = new Proxy(obj, {
    get(target, name) {
        console.log('get:', target, name);
        return Reflect.get(target, name);
    },
    deleteProperty(target, name) {
        console.log('delete:' + name);
        return Reflect.defineProperty(target, name);
    },
    has(target, name) {
        console.log('has:' + name);
        return Reflect.has(target, name);
    }
});
Reflect.defineProperty(loggedObj, 'a');
console.log(Reflect.has(loggedObj, 'a'));
