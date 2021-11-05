let arrangeCoins = function(n){
    let i = 1
    let rows = 0

    while(true){
        n = n - i
        if (n < 0){
            return rows
        }

        if (n>=0){
            rows++
        }
        i++
    }
}