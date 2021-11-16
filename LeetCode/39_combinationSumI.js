// let combinationSum = function(candidates, target){
//     let results = []
//     let resultsMap = {}

//     function combine(target, combSum){
//         if(target < 0) return 
//         if(target === 0){
//             let newCombSum = combSum.slice()
//             newCombSum = newCombSum.sort((a,b) => a-b)
//             if(!(newCombSum in resultsMap)){
//                 resultsMap[[...newCombSum]] = "Added"
//                 results.push(newCombSum)
//             }
//             return
//         }

//         for(let i = 0; i < candidates.length; i++){
//             combSum.push(candidates[i])
//             let newTarget = target - candidates[i]

//             combine(newTarget, combSum)

//             combSum.pop()
//         }
//         return
//     }

//     combine(target, [])
    
//     return results

// }

// --------------------------------------------- Efficient solution using NeetCode method -----------------------------//
// Efficient way to prevent duplicates i.e. [2,2,3] and [2,3,2] without using hashMap


let combinationSum = function(candidates, target){
    let results = []
    let n = candidates.length

    function combine(start, combSum, sum){
       
        if (sum === target){
            results.push(combSum.slice())
            return
        }
        if (start >= n || sum > target) return


        let decisionEle = candidates[start]
        combSum.push(decisionEle)
        combine(start, combSum, sum + candidates[start])

        combSum.pop()
        combine(start + 1, combSum, sum)

        return
    }

    combine(0, [], 0)
    
    return results

}

let candidates = [2,3,5]
let target = 8

console.log(combinationSum(candidates, target))