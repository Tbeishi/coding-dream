const arr = [-1,1,0,-3,3]
1,1,2,6

var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(0)
    let result = 1
    let zeroCount = 0
    for(let i = 0; i < nums.length; i++){
        nums[i] !== 0 ? result *= nums[i] : zeroCount++
    }
    console.log(result);

    for(let i = 0; i < nums.length; i++){
        res[i] = zeroCount > 1 || (zeroCount === 1 && nums[i] !== 0) ? 0 : result / (nums[i] ? nums[i] : 1)
    }
    return res
};

const res = productExceptSelf(arr)
console.log(res);
