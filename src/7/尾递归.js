//递归
function factorial(n, total) {
    if (n === 1) return total;
    console.log('n ' + n);
    console.log('total ' + total);
    return factorial(n - 1, n * total);
}

/*
    4   4
    3   12
    2   24
 */

console.log(factorial(4, 1));   // 24


//斐波那契数列
function Fibonacci(n, ac1 =1, ac2 = 1) {
    if (n <= 1) {return ac2;}
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(20));

//递归改写
function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}
function factorial(n) {
    return tailFactorial(n, 1)
}
console.log(factorial(4));