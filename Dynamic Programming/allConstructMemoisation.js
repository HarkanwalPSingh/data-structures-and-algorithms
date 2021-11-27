let allConstruct = function(target, wordBank, memo = {}){
    // console.log(memo)
    if (target in memo) return memo[target]
    if (target === "") {
        return [[]]
    }

    let result = []

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            let suffixWays = allConstruct(suffix, wordBank, memo)
            // let totalWays = suffixWays.map(way => [word, ...way])
            // result = [...result, ...totalWays]
            
            if (suffixWays.length > 0){
                let totalWays = []
                for (let item of suffixWays){
                    totalWays.push([...item, word])
                }
                result = [...result, ...totalWays]
            }
        }
    }

    // console.log(memo)
    memo[target] = result
    return result
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))