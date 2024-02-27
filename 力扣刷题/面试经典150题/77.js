// 77.js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var backtracking = function(res,path,StartIndex,n,k){
    if(path.length === k){
        res.push([...path])
        return
    }
    for(let i = StartIndex; i <= n && path.length < k ; i++){
        path.push(i)
        backtracking(res,path,i + 1,n,k)
        path.pop()
    }
}

var combine = function(n, k) {
    const res = []
    const path = []
    backtracking(res,path,1,n,k)
    return res
};

const res = combine(4,2)
console.log(res);
