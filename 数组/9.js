const arr = [ 2, 5, 3, 1, 7, 6]
const res = arr.map(item => item = '♥')
const res2 = arr.map(item => item *= 3 ) 
console.log(res) //[ '♥', '♥', '♥', '♥', '♥', '♥' ]
console.log(res2)//[ 6, 15, 9, 3, 21, 18 ]
console.log(arr)//[ 2, 5, 3, 1, 7, 6 ] //原数组不变