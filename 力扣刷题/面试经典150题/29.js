//29.js
var threeSum = function(nums) {
    const res = []
    nums.sort((a,b)=> a - b)
    console.log(nums);
    for(let i = 0; i < nums.length - 1; i++){
        if(i && nums[i] === nums[i-1]) continue
        let left = i + 1
        let right = nums.length - 1
        while(left < right){
             if(nums[i] + nums[left] + nums[right] > 0) right --
             else if(nums[i] + nums[left] + nums[right] < 0) left ++
             else{
                res.push([nums[i],nums[left++],nums[right--]])
                while(nums[right] === nums[right + 1]){
                    right --
                }
                while(nums[left] === nums[left - 1]){
                    left ++
                }
             }
        }
    }
    return res
};
const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
const res = threeSum(nums)
console.log(res);