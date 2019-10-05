// rest参数
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}

console.log(add(2, 3, 5));

const sortNumber = (...numbers) => numbers.sort();

console.log(sortNumber(3,5,2));

/*
    1.rest参数只能是最后一个参数
    2.函数length属性不包括rest参数
 */