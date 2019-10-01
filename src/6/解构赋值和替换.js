let {groups: {one, tow}} = /^(?<one>.*):(?<tow>.*)$/u
    .exec('foo:bar');
console.log(one);   // foo
console.log(tow);   // bar


