// digits = [1,2,3]
// const res = digits.join('')
// const num = new Number(res) + 1
// const str = num.toString()
// const arr = []
// for( var i = 0 ; i < str.length ; i++){
//     arr.push(str[i])
// }
// console.log(arr);

// const arr = new Set()
// arr.add([1, 2, 3, 4, 5])
// arr.add([1, 2, 3])
// console.log([...arr]);

var nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
const arr = new Set()
nums = nums.sort()
console.log(nums); //[-1, -1, -2, -3, -4, 0,  0,  1,  2,  3, 4]
for( var i = 0 ; i < nums.length - 2 ; i ++ ){
    var j = i + 1;
    var k = i + 2;
   while(k < nums.length){
        if(i > 0 && nums[i] === nums[ i - 1])  break
        if(j > 1 && nums[j] === nums[ j - 1])  {
            j++
            k++
        }
        if(k > 2 && nums[k] === nums[ k - 1] && j != k - 1)  k++
       if(nums[i] + nums[j] + nums[k] === 0){
           arr.add([nums[i],nums[j],nums[k]])
       }
       if(k === nums.length - 1 && j < nums.length - 2){
           j ++ 
           k = j + 1
           continue
       }
       k++
   }
}
console.log([...arr]);
