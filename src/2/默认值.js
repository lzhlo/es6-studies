/**
 * Created by wzp on 2018/3/3.
 */
'use strict';

let [foo = true] = [];
// foo => true

let [x, y = 'b'] = ['a'];
console.log(x);
console.log(y);

/*只有当一个数组成员严格等于undefined默认值才会生效 ===*/

function f() {
    console.log('aaa');
}
let [c = f()] = [1];
// c => 1