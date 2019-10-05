var person = {
    name: '张三'
};
var proxy = new Proxy(person, {
    get: function (target, property) {
        if (property in target) {
            return target[ property ];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});
console.log(proxy.name);
// 抛出异常
//console.log(proxy.age);   //ReferenceError: Property "age" does not exist.

//----------------------实现读取负数组----------------------
function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };
    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);   // 'c'
//----------------------链式操作----------------------
var pipe = (function () {
    return function (value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function (pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }
                funcStack.push(global[fnName]);
                return oproxy;
            }
        });
        return oproxy;
    }
}());
var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;
console.log(pipe(3).double.pow.reverseInt.get);









