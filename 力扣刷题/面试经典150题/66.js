// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
var plusOne = function(digits) {
    const n = digits.length
    for(let i = n - 1; i >= 0; i--){
        if(digits[i] !== 9){
            digits[i] ++
            for(let j = i + 1; j < n; j++){
                digits[j] = 0
            }
            return digits
        }
    }
    const arr = new Array(n + 1).fill(0)
    arr[0] = 1
    return arr
  };