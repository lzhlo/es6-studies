var obj = {}
obj.foo = true;

obj[ 'a' + 'bc' ] = 123;
console.log(obj);   //{ foo: true, abc: 123 }


let propKey = 'foo';
let obj1 = {
    [ propKey ]: true,
    [ 'a' + 'bc' ]: 123
};
console.log(obj1);  //{ foo: true, abc: 123 }

let lastWord = 'last word';
const a = {
    'first word': 'hello',
    [ lastWord ]: 'world'
};
console.log(a);     //{ 'first word': 'hello', 'last word': 'world' }

//动态定义方法
let obj2 = {
    [ 'h' + 'ello' ]() {
        return 'hi';
    }
};
console.log(obj2.hello());

