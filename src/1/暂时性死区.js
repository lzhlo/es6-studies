if (true) {
    tmp = 'abc';
    console.log(tmp);   // ReferenceError

    let tmp;
    console.log(tmp);   // undefined

    tmp = 123;
    console.log(tmp);   // 123
}

