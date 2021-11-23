let canConstruct = function(target, wordBank, memo = {}){
    if (target in memo) return memo[target]
    if (target === "") return true

    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank, memo)){
                memo[target] = true
                return memo[target]
            }
        }
    }

    memo[target] = false
    return memo[target]
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))