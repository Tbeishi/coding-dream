const obj = {
    name:'小米',
    age:18,
    like:{
        sport:'running'
    }
}

const obj2 = Object.create(obj) //创建obj2空对象，隐式继承obj对象上的属性
obj2.sex = '男' //给obj2添加一个属性sex,值为'男'
console.log(obj2) // { sex: '男' } 

for(const item in obj2) {
    //使用data.hasOwnProperty()方法，判断对象上的属性是不是隐式原型上的属性
    if(obj2.hasOwnProperty(item))  //是隐式原型上的属性，返回false，否则返回true
    console.log(item)  //只打印sex 
}





// for (const key in obj) {
//     console.log(key); //依次打印name age like,即对象的各属性名
// }

// for (const key in obj) {
//     console.log(obj.key); //依次打印undefined undefined undefined
//                           //注：不能这样遍历对象的值，key会被当成是obj的一个属性
// }

// for (const key in obj) {
//     console.log(obj[key]); //依次打印 小米 18 { sport: 'running' },遍历对象每一项
//                           //就是和遍历数组一样的，对象名[属性名]
// }


 

