# let与const
## 暂时性死区
```javascript
if (true) {
    tmp = 'abc';
    console.log(tmp);   // ReferenceError

    let tmp;
    console.log(tmp);   // undefined

    tmp = 123;
    console.log(tmp);   // 123
}
```
### babel编译后
```javascript
'use strict';

if (true) {
    tmp = 'abc';
    console.log(tmp); // abc

    var tmp = void 0;
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}
```
> 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错

