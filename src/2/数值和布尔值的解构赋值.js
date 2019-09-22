let {toString: s} = 123;
console.log(s === Number.prototype.toString);   // true
console.log("--------------------------");
let {toString: s1} = true;
console.log(s1 === Boolean.prototype.toString); // true