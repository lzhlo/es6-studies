let s = 'Hello world!';

console.log(s.startsWith('Hello'));
console.log(s.endsWith('!'));
console.log(s.includes('o'));
/*
    includes()：返回布尔值，表示是否找到了参数字符串
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部
 */

console.log('x'.repeat(3));
/*
    repeat 将原字符串重复n次
 */

console.log('0062'.padStart(5, '*'));  // ****x
console.log('1818'.padEnd(11, '*'));
/*
    字符串补全
 */
