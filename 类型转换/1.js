// 
console.log(Boolean(0)); //false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(''));//false

console.log(Number('hello')); //NaN(number类型的特殊值，表示无法表示)
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(String());