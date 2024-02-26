// 79.js
const nums = [9,1,4,7,3,-1,0,5,8,-1,6]
nums.sort((a,b) => a - b)
const set = new Set(nums)
console.log([...set]);