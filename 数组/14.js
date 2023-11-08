const arr = [ 1, 2, 3, 4]
//无初始值
const res = arr.reduce((prev,cur)=> prev + cur)
//（第一次循环）  prev   cur    返回值
//                1      2       3
//（第二次循环）  prev   cur    返回值
//                3      3       6
//（第三次循环）  prev   cur    返回值
//                6      4       10
console.log(res) //10

//有初始值
const res2 = arr.reduce((prev,cur)=> prev + cur, 10)
//（第一次循环）  prev   cur    返回值
//                10     1       11
//（第二次循环）  prev   cur    返回值
//                11     2       13
//（第三次循环）  prev   cur    返回值
//                13     3       16
//（第四次循环）  prev   cur    返回值
//                16     4       20
console.log(res2) //20

//数组对象中元素求和方式
const arr2 = [{
    name:'小米',
    salary: 20000
},{
    name:'小方',
    salary: 20000
},{
    name:'小露',
    salary: 20000
},
]
const res3 = arr2.reduce((pre,cur) => pre + cur.salary, 0) //注：此时初始值0一定不能省略
console.log(res3) //60000