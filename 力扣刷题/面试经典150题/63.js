/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = new Array(m).fill(0).map(()=> new Array(n).fill(0))
    for(let i = 0; i < m; i++) obstacleGrid[i][0] === 1 ? i++ : dp[i][0] = 1  
    for(let i = 0; i < n; i++) obstacleGrid[0][i] === 1 ? i++ : dp[0][i] = 1  
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(obstacleGrid[i-1][j] === 1 && obstacleGrid[i][j-1] === 0 && obstacleGrid[i][j] === 0) dp[i][j] = dp[i][j-1]
            else if(obstacleGrid[i][j-1] === 1 && obstacleGrid[i-1][j] === 0 && obstacleGrid[i][j] === 0) dp[i][j] = dp[i-1][j]
            else if(obstacleGrid[i][j-1] === 0 && obstacleGrid[i-1][j] === 0 && obstacleGrid[i][j] === 0) dp[i][j] = dp[i-1][j] + dp[i][j-1]
            else{
                dp[i][j] = 0
            }
        }
    }
    return dp[m-1][n-1]
};

const arr = [[0,1,0,0],[0,0,0,0],[0,0,0,0]]
const res = uniquePathsWithObstacles(arr)
console.log(res);