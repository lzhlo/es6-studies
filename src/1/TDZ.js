/**
 * Created by wzp on 2018/3/2.
 */
/*暂时性死区 temporal dead zone*/
/*
 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
 */
var tmp = 123;

if (true) {
    tmp = 'abc';
    let tmp;
    //ReferenceError: tmp is not defined
}
