/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const h = triangle.length
    const dp = new Array(h)
    for(let i = 0; i < h; i++) {
        dp[i] = new Array(triangle[i].length).fill(0)
    }
    dp[0][0] = triangle[0][0]
    for(let i = 1; i < h; i++) dp[i][0] = dp[i-1][0] + triangle[i][0]
    for(let i = 1; i < h; i++){
        for(let j = 1; j < triangle[i].length; j++){
            if(j === triangle[i].length - 1) dp[i][j] = dp[i-1][j-1]+ triangle[i][j]
            else{
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j]
            }
        }
    }
    const res = Math.min(...dp[h-1])
    return res
};

const arr = [[2],[3,4],[6,5,7],[4,1,8,3]]
const res = minimumTotal(arr)
console.log(res);