var removeDuplicates = function(nums) {
    var fast = 2;
    var slow = 2;
    var n = nums.length;
    if(n <= 2) return n
    while( fast < n ){
        if(nums[slow-2] != nums[fast]){
            nums[slow] = nums[fast]
            slow++
 
        }
        fast++
    }
    return slow
 };
 