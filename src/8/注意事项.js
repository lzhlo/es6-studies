function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function () {
        this.s2++
    }, 1000)
};

let timer = new Timer()
setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
/*
    Timer函数内部设置了两个定时器，
    分别使用了箭头函数和普通函数。
    前者的this绑定定义时所在的作用域（即Timer函数），
    后者的this指向运行时所在的作用域（即全局对象）。
    所以，3100 毫秒之后，timer.s1被更新了 3 次，
    而timer.s2一次都没更新
 */
