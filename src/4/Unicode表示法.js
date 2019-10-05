var s = '𠮷';
console.log(s.length);
console.log(0);
console.log(1);
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));

console.log('------');

var a = '𠮷a';
console.log(a.codePointAt(0));
console.log(a.codePointAt(1));
console.log(a.codePointAt(2));

console.log('------');

let j = '𠮷a';
for (let ch of j) console.log(ch.codePointAt(0).toString(16));

console.log('------');

//测试一个字符由两个字节还是由四个字节组成
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit('𠮷'));
console.log(is32Bit('a'));