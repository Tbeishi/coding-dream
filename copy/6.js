const obj = {
    name:'小米',
    age:18,
    like:{
        sport:'running'
    }
}

//给obj对象添加一个新的属性sex,值为'男'
obj['sex'] = '男'  // <==> obj.sex = '男'

for (const key in obj) {
    console.log(key); //依次打印name age like sex,即对象的各属性名
}

for (const key in obj) {
    console.log(obj.key); //依次打印undefined undefined undefined undefined
                          //注：不能这样遍历对象的值，key会被当成是obj的一个属性
}

for (const key in obj) {
    console.log(obj[key]); //依次打印 小米 18 { sport: 'running' } 男,遍历对象每一项
                          //就是和遍历数组一样的，对象名[属性名]
}