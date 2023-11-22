//手动实现深拷贝
const obj = {
    name:'啊纬',
    age:18,
    like:{
        type:'coding'
    }
}

function deepCopy(obj) {
    if(typeof obj !== 'object' || obj == null) return //不是对象或者是null直接返回
    const objCopy = obj instanceof Array ? [] : {} //判断obj是数组还是对象
    for (const key in obj) {
       if (obj.hasOwnProperty(key)) {
        if(obj[key] instanceof Object){ //判断obj[key]是不是引用类型
            objCopy[key] = deepCopy(obj[key])
        }  
        else{
            objCopy[key] = obj[key]
        }
       }
    }
    return objCopy
}

const res = deepCopy(obj)
console.log(res) // { name: '啊纬', age: 18, like: { type: 'coding' } }
obj.like.type = 'sleeping'
console.log(res) // { name: '啊纬', age: 18, like: { type: 'coding' } }