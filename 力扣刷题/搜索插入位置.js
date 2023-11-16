// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。
// 示例 1:

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
// 示例 2:

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1
// 示例 3:

// 输入: nums = [1,3,5,6], target = 7
// 输出: 4


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const res = nums.indexOf(target)
    if(res != -1)
    return res;
    else{
        for(var i = 0;i < nums.length-1 ;i++){
            if(target > nums[i] && target < nums[i+1]) return i + 1
            if(target === nums[i]) return i
            if(target > nums[nums.length-1]) return nums.length
            if(target < nums[0]) return 0
        }
        return nums[0] > target ? 0 : 1 
    }
};