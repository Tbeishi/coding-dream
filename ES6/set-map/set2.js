// const arr = [1, 2, 2, 3, 3, 4, 5]
// //展开解构，将 Set 转回数组
// const res = [...new Set(arr)] 
// //或者也可以使用Array.from()方法将类数组Set转回数组
// const res2 = Array.from(new Set(arr)) 
// console.log(res)  //[ 1, 2, 3, 4, 5 ] 
// console.log(res2) //[ 1, 2, 3, 4, 5 ] 

const set1 = new Set([1, 2, 3]);  
const set2 = new Set([2, 3, 4]);  
  
// 求交集  
const res = new Set([...set1].filter(x => set2.has(x)));  
console.log([...res]); // [2, 3]  
  
// 求并集  
const res2 = new Set([...set1, ...set2]);  
console.log([...res2]); // [1, 2, 3, 4]  
  
// 求差集  
const res3 = new Set([...set1].filter(x => !set2.has(x)));  
console.log([...res3]); // [1]  