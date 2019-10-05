var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
    console.log(e);
}

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
    console.log(name + ': ' + value);
}
//----------------------计算生成的数据结构----------------------
/*
    entries()  返回一个遍历器对象，用来遍历[键名, 键值]组成的数组
    keys()     返回一个遍历器对象，用来遍历所有的键名
    values()   返回一个遍历器对象,用来变遍历所有的键值
 */
let arr = [ 'a', 'b', 'c' ];
for (let pair of arr.entries()) {
    console.log(pair);
}