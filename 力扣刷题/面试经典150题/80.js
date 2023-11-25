const nums = [1,1,1,2,2,3]

const map = new Map()

 for(var i = 0 ; i < nums.length ; i++){
    var count = 1
    if(!map.has(nums[i])) {
        count = 1
        map.set(nums[i],count)
    }
    else{
    count ++ 
     map.set(nums[i],count)
    }
}

console.log(map);