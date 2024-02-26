/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums.sort((a,b) => a - b))
    const arr = [...set]
    let res = arr.length === 0 ? 0 : 1
    let count = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] - 1 === arr[i-1]) res ++
        else{
            count = count > res ? count : res
            res = 1
        }
    }
    res = count > res ? count : res
    return res
};