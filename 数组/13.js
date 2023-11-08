const arr = [ '2', '5', '3', '1', '7', '6']
const res = arr.filter(item => item % 2 === 0) //筛选数组中的偶数
console.log(res) //[ '2', '6' ]
console.log(arr)//[ '2', '5', '3', '1', '7', '6' ]

const arr2 = ['786.sn', 'g213@.cn', 'dash.jpg','3626','786@']
const res2 = arr2.filter(item => item.includes('@')) //筛选数组元素中含有字符@的元素
console.log(res2)//[ 'g213@.cn', '786@' ]
