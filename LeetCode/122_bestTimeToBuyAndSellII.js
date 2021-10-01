let maxProfit = function(prices){
    let buy = prices[0]
    let sell = prices[0]
    let currentProfit = 0
    let profit = 0

    for (let i = 0; i < prices.length; i++){
        let currentPrice = prices[i]
        if (currentPrice < buy){
            profit = profit + currentProfit
            buy = currentPrice
            sell = currentPrice
        } else if (currentPrice > buy && currentPrice > sell){
            sell = currentPrice
        } else if (currentPrice >= buy && currentPrice < sell){
            profit = profit + currentProfit
            buy = currentPrice
            sell = currentPrice
        }

        currentProfit = sell - buy

        if (i === prices.length-1){
            profit = currentProfit + profit
        }
    }
    return profit
}

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]))