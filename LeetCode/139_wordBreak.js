let wordBreak = function(s, wordDict){

    function ifPossibleToBreak(target, wordDict, memo = {}){
        if (target in memo) return memo[target]
        if (target === "") return true

        for (let word of wordDict){
            if (target.indexOf(word) === 0){
                let suffix = target.slice(word.length)

                if (ifPossibleToBreak(suffix, wordDict, memo)){
                    memo[target] = true
                    return memo[target]
                }
            }
        }
        memo[target] = false
        return memo[target]
    } 

    return ifPossibleToBreak(s, wordDict)
}