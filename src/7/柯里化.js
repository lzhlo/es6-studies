/**
 * Created by wzp on 2018/3/27.
 */



/*
    柯里化
        将多参数的函数转换成单参数的形式
 */
function factorial(n, total = 1) {
    if (n === 1) return total;
    return factorial(n - 1,n * total);
}
console.log(factorial(5));