
const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');

// const f1 = () => console.log('now1');
// Promise.try(f1);
// console.log('next1');

const a = () => console.log('now2');
(
    () => new Promise(resolve => resolve(a()))
)();
console.log('next2');