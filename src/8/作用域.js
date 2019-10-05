let foo = 'outer';
function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func());
}

bar();  // outer
/*
    函数bar的参数func的默认值是一个匿名函数，
    返回值为变量foo。
    函数参数形成的单独作用域里面，
    并没有定义变量foo，
    所以foo指向外层的全局变量foo，
    因此输出outer
 */
