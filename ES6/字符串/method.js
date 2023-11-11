let str = 'abcdefg'

// console.log(str[2]);
// console.log(str.at[2]);

console.log(str.startsWith('ab'));

let obj = {
    a:1,
    b:2
}

let str2 = JSON.stringify(obj);
console.log(str2);
console.log(JSON.parse(str2));