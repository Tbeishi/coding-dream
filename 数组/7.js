const arr = ['red', 'green', 'blue','balck','white']
const res = arr.slice(1,3)
console.log(res) //[ 'green', 'blue' ]
console.log(arr) //[ 'red', 'green', 'blue', 'balck', 'white' ]

const arr2 = ['red', 'green', 'blue','balck','white']
const res2 = arr2.slice(-3,-1)
console.log(res2) //[ 'blue', 'balck' ]

const arr3 = ['red', 'green', 'blue','balck','white']
const res3 = arr3.slice(0) //可实现数组的复制
console.log(res3) //[ 'red', 'green', 'blue', 'balck', 'white' ]