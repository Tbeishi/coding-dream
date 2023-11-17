let arr = ['a', 'b', 'c', 'd', 'e']
// for(let item of arr) {  //不能遍历对象，只能遍历有迭代器属性的
//     console.log(item);
// }

let obj = {
    name:'啊纬',
    age:18,
    like:{
        type:'coding'
    }
}

for(let item in obj) {  //能遍历对象，也能遍历数组，也能遍历到隐式原型上的属性
    console.log(obj[item]);
}

let data = Object.create(obj)
data.sex = '男'
for(let item in data) {
    if(data.hasOwnProperty(item)) //data.hasOwnProperty(item)
                                  //判断对象上的属性是不是隐式原型上的属性
    console.log(item);
}