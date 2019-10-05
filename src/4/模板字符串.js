console.log(`In JavaScript '\n' is a line-feed.`);
console.log(`string text line 1
string text line 2`);

//字符串中嵌入变量

let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

//大括号可以放入任意的javascript表达式, 可以进行运算,以及引用对象属性

let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} + ${y * 2} = ${x + y * 2}`);
let obj = {x: 1, y: 2};
console.log(`${obj.x + obj.y}`);

//模板字符串调用函数
function fn() {
    return 'Hello World';
}
console.log(`foo ${fn()} bar`);

//模板字符串嵌套

const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

const data = [
    {first: '<Jane>', last: 'Bond'},
    {firstL: 'Lars', last: '<Croft'}
];
console.log(tmpl(data));

