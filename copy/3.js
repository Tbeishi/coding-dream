//浅拷贝的实现原理
const obj = {
    name:'啊纬',
    age:18,
    like:{
        type:'coding'
    }
}
const arr = ['a', {n:1}, 1, undefined , null]

function shalldowCopy(obj){
 if(typeof obj !== 'object' || obj == null) return //不是对象或者是null直接返回
    const objCopy = obj instanceof Array ? [] : {} //判断obj是数组还是对象
    for(const key in obj){
        if(obj.hasOwnProperty(key)){  //不需要obj隐式原型上的属性
            //每次给新对象添加原对象的一个属性和属性值
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

const res = shalldowCopy(obj)
console.log(res) //{ name: '啊纬', age: 18, like: { type: 'coding' } }
console.log(shalldowCopy(arr)) //[ 'a', { n: 1 }, 1, undefined, null ]
obj.like.type = 'sleeping'
console.log(res);

// let newobj = shalldowCopy(obj)
// obj.age = 20
// const newobj = shalldowCopy(arr)
// console.log(newobj)


