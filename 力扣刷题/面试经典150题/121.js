/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0, buyPrice = prices[0]
    for(let i = 1; i < prices.length; i++){
        res = Math.max(res, prices[i] - buyPrice)
        buyPrice = Math.min(buyPrice, prices[i])
    }
    return res
 };