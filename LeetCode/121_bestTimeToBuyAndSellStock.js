let maxProfit = function (prices){
    let max = prices[0]
    let min = prices[0]
    let profit = 0

    for (let i = 1; i < prices.length; i++){
        if (prices[i] < min){
            min = prices[i]
            max = prices[i]
        } else if (prices[i] > max){
            max = prices[i]
        }
        profit = Math.max(max-min, profit)
    }
    return profit
}