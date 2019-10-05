/**
 * Created by wzp on 2018/3/2.
 */
/*
    函数可以在块级作用域中声明
 */
function f() {
    console.log('123')
}
(function () {
    if (true) {
        function f() {
            console.log('声明函数');
        }
    }
    f();
}());