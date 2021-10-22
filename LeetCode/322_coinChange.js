let coinChange = function(coins, amount){

    if(amount === 0){
        return 0
    }
    
    let dp = []
    dp[0] = 0


    for(let i = 1; i <= amount; i++){
        dp[i] = amount + 1

        for (let coin = 0; coin < coins.length; coin++){
            if (coins[coin] <= i){
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[coin]])
            }
        }
    }


    if (dp[amount] >= amount + 1){
        return -1
    }else {
        return dp[amount]
    }

}

console.log(coinChange([2], 3))