let x = 1;
function f(m) {
    return m * 2    //传名调用 这里等同于 (x + 5) * 2
}

console.log(f(x + 5));