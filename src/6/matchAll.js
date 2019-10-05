var regex = /t(e)(st(\d?))/g;
var string = 'test1test2test3';

var matches = [];
var match;
while (match = regex.exec(string)) {
    matches.push(match);
}


console.log(matches);

const regex1 = /t(e)(st(\d?))/g;
for (const match of string.matchAll(regex1)) {
    console.log(match);
}
