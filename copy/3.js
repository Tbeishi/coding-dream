//浅拷贝的实现原理
let obj = {
    name:'啊纬',
    age:18,
    like:{
        type:'coding'
    }
}

let arr = ['a', {n:1}, 1, undefined , null]

function shalldowCopy(obj){
    if(typeof obj !== 'object' || obj == null) return
    let objCopy = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

// let newobj = shalldowCopy(obj)
// obj.age = 20
let newobj = shalldowCopy(arr)
console.log(newobj);