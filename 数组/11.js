const arr = [2, 5, 3, 1, 7, 6]
const res = arr.indexOf(1) //从数组下标默认位置（0）开始查找数字1
console.log(res) //3

const arr2 = [2, 4, 5, 1, 7, 6, 5, 8, 5]
const res2 = arr2.indexOf(5,3) //从数组下标3位置开始查找数字5
console.log(res2) //6
