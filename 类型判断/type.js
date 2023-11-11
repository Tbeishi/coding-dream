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

//判断类型
console.log(typeof(str)); //string
console.log(typeof(nu)); //object
console.log(typeof(big)); //bigint
console.log(typeof(s)); //symbol

console.log(typeof(obj)); //object
console.log(typeof(arr)); //object
console.log(typeof(fn)); //function
console.log(typeof(date)); //object

console.log(typeof  Symbol('hello'));


