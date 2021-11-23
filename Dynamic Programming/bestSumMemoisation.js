let bestSum = function(targetSum, numbers, memo = {}){
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let minLength = null

    for (let num of numbers){
        let remainder = targetSum - num
        let result = bestSum(remainder, numbers, memo)

        if (result !== null){
            result = [...result, num]
            // memo[targetSum] = result.slice()
            if (minLength === null){
                minLength = [...result]
            } else {
                minLength = minLength.length > result.length ? [...result] : [...minLength]
            }
        }
    }

    memo[targetSum] = minLength
    return memo[targetSum]
}

console.log(bestSum(7, [5,3,4,7]))
console.log(bestSum(8, [2,3,5]))
console.log(bestSum(8, [1,4,5]))
console.log(bestSum(100, [1,2,4,25]))