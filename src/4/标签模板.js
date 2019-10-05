//它可以紧跟在一个函数名后面，
//该函数将被调用来处理这个模板字符串 这被称为“标签模板”功能

console.log`123`;

let a = 5;
let b = 10;
console.log(tag`Hello ${ a + b } world ${ a * b }`);
console.log(tag(['Hello ', ' world ', ''], 15, 50));

function tag(stringArr, ...values) {

}

//如果参数中有 变量替换
let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)${total}`;

function passthru(literals) {
    let result = '';
    let i = 0;
    console.log();
    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}
console.log(msg);