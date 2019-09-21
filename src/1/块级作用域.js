function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);
}
f1()    // 5
// ---------------------运行块级作用域的任意嵌套--------------------

{
    let aa = 2;
    {
        let aa = 1;
        console.log(aa);
    }
    console.log(aa);
}

{
    let a = 'secret';
    // 这种写法叫做函数表达式
    let f = () => a;
    console.log(f());
}

