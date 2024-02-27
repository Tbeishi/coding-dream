/**
 * @param {number} n
 * @return {number}
 */
var isCheck = function(arr,row,col,n){
    //同列不能有皇后
    for(let i = row - 1; i >= 0; i--){
        if(arr[i][col] === 1) return false
    }
    //45°角不能有皇后
    for(let i = row - 1,j = col - 1; i >= 0 && j >= 0; i--,j--){
        if(arr[i][j] === 1) return false
    }
    //135°角不能有皇后
    for(let i = row - 1,j = col + 1; i >= 0 && j < n; i--,j++){
        if(arr[i][j] === 1) return false
    }
    return true
}

var backtracking = function(method,row,n,arr){
    if(row === n){
        console.log(arr);
        method.push(arr)
        return
    }
    for(let i = 0; i < n; i++){
        if(isCheck(arr,row,i,n)){
            arr[row][i] = 1
            backtracking(method,row + 1,n,arr)
            arr[row][i] = 0
        }
    }
}

var totalNQueens = function(n) {
    const method = []
    const arr = new Array(n).fill(0).map(()=>new Array(n).fill(0))
    backtracking(method,0,n,arr)
    return method.length
};

const res = totalNQueens(4)
console.log(res);