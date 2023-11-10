let str = 'hello' //string
let num = 123 //number
let flag = false //boolean
let und = undefined //undefined
let nu = null //null
let big = 123n //big number
let s = Symbol('hello')  //symbol

let obj = {}
let arr = []
let fn = function(){}
let date = new Date()

console.log(obj instanceof Object); // true
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(fn instanceof Function); // true
console.log(fn instanceof Object); // true
console.log(date instanceof Date); // true
console.log(str instanceof String); // false

function test(obj){
    if(obj instanceof Object){
        return obj.name
    }
}
test(['米'])