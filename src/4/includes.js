let s = 'Hello world!';

console.log(s.startsWith('Hello')); //是否在头部
console.log(s.endsWith('!'));   //是否在尾部
console.log(s.includes('o'));

console.log('------指定开始搜索位置-----');

console.log(s.startsWith('world', 6));
console.log(s.endsWith('Hello', 5));    //针对前n个字符
console.log(s.includes('Hello', 6));


