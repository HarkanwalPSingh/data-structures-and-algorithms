let numSquares = function(n){
    let nums = []
    let sqRoot = Math.floor(Math.sqrt(n))

    for (let i = 1; i <= sqRoot; i++){
        nums.push(i*i)
    }

    function dfs(target, allowance, memo = {}){
        if (target in memo) return memo[target]
        if (target === 0) return 0
        if (target < 0) return n + 1
        if (allowance === 0) return n + 1

        let minLength = n + 1

        for (let num of nums){
            let remainder = target - num
            let output = dfs(remainder, allowance - 1, memo)
            minLength = Math.min(minLength, output + 1)
        }

        memo[target] = minLength
        return minLength
    }

    for (let i = 1; i <= n; i++){
        let output = dfs(n,0,i)
        if (output <= n) return output
    }

    return dfs(n, 0)

}