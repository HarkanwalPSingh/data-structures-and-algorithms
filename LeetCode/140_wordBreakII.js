let wordBreak = function(s, wordDict){

    function constructSentence (targetString, wordDict, memo = {}){
        if (targetString in memo) return memo[targetString]
        if (targetString === ""){
            return [""]
        }

        let result = []

        for (let word of wordDict){
            if (targetString.indexOf(word) === 0){
                let suffixString = targetString.slice(word.length)
                let suffixWays = constructSentence(suffixString, wordDict)
                let targetWays = suffixWays.map(
                    item => {
                        if (item.length === 0) return word
                        return word + " " + item
                    }
                    )
                result = [...result, ...targetWays]
            }
        }

        memo[targetString] = result
        return memo[targetString]

    }

    return constructSentence(s, wordDict)
}