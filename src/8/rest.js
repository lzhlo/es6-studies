const add = (...values) => {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
};

console.log(add(2, 3, 5));

const push = (array, ...items) => {
    items.forEach((item) => {
        array.push(item);
        console.log(item);
    })
};

let a = [];
push(a, 1, 2, 3);
