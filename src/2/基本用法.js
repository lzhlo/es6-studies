/**
 * Created by wzp on 2018/3/3.
 */
'use strict';

let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = ['foo', [['bar'], 'baz']];

let [, , third] = ['foo', 'bar', 'baz'];

let [x, , y] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3, 4];

let [e, d, ...z] = ['a'];
// e => 'a'
// d = undefined
// z = []
/*如果解构不成功，变量的值就等于undefined*/

/*只要某种数据具有Iterator接口都可以采用数组形式的解构赋值*/
function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [g ,j, k, n, m, v] = fibs();

console.log(m);