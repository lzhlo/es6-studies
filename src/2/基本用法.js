let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

let [head, ...tail] = [1, 2, 3, 4];

console.log("-----------------------------");
console.log(head);  // 1
console.log(tail);  // [ 2, 3, 4 ]

console.log("-----------------------------");
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x); // a
console.log(y); // b
console.log(z); // c
console.log("-----------------------------");

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth); // 5
