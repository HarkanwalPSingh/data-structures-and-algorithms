let countConstruct = function(target, wordBank, memo = {}){
    if (target in memo) return memo[target]
    if (target === "") return 1

    let count = 0

    for (let word of wordBank){
        if (target.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            memo[target] = countConstruct(suffix, wordBank, memo)
            count += memo[target]
        }
    }

    return count
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))