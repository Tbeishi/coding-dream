var rotate = function(nums, k) {
    while(k > nums.length){
        k %= nums.length
    }
    console.log(k);
    const arr = []
    arr.push(...nums.slice(nums.length - k, nums.length))
    arr.push(...nums.slice(0,nums.length - k))
    return arr
};

const nums = [1,2]
const res = rotate(nums,5)
console.log(res);