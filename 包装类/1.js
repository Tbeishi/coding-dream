//原始数据类型
let a = 'hello'
let b = 123
let c = true
let u = undefined
let n = null

//引用类型
let obj = {
    name:'小米'
}
let lw = obj
obj.name = '小红'
console.log(obj.name)