const arr = ['red', 'green', 'blue','balck','white']
const res = arr.slice(1,3)
console.log(res) //[ 'green', 'blue' ]
console.log(arr) //[ 'red', 'green', 'blue', 'balck', 'white' ]


const arr3 = ['red', 'green', 'blue','balck','white']
const res3 = arr3.slice(0) //可实现数组的复制
console.log(res3) //[ 'red', 'green', 'blue', 'balck', 'white' ]

const arr4 = "[object String]"
const res4 = arr4.slice(8,-1)
console.log(res4)  //String