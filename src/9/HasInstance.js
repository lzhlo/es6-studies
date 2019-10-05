class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}
console.log([1, 2, 3] instanceof new MyClass());    // true

class Even {
    static [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
}
console.log(1 instanceof Even);     // false
console.log(2 instanceof Even);     // true