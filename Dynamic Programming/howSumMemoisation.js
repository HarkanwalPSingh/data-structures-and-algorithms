// function howSum (targetSum, comb, memo = {}){
//     if (results.length > 0) return
//     if (targetSum === 0) {
//         results.push(comb.slice())
//         return
//     }
//     if (targetSum < 0) return

//     for (let num of numbers){
//         let remainder = targetSum - num
//         comb.push(num)
//         howSum(remainder, comb, memo)
//         comb.pop()
//     }
//     return 
// }

// let results = [[]]
// let numbers = [12,4,5,7,8,9,10,12,11,14]
// let target = 2

function howSum (targetSum, memo = {}){
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of numbers){
        let remainder = targetSum - num
        let remainderResults = howSum(remainder, memo)
        if (remainderResults !== null){
            memo[targetSum] = [...remainderResults, num]
            return memo[targetSum]
        }
        
    }

    memo[targetSum] = null
    return memo[targetSum]
}

let numbers = [7,14]
let target = 300
console.log(howSum(target, []))
