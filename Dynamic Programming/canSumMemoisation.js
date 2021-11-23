function canSum (targetSum, memo = {}){
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0) return false

    for (let num of numbers){
        let remainder = targetSum - num
        if (canSum(remainder, memo)){
            memo[targetSum] = true
            return true
        }
    }

    memo[targetSum] = false
    return false

}

let numbers = [7,14]
let target = 300000

console.log(canSum(target))