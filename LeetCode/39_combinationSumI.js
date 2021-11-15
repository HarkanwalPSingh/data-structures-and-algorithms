let combinationSum = function(candidates, target){
    let results = []
    let resultsMap = {}

    function combine(target, combSum){
        if(target < 0) return 
        if(target === 0){
            let newCombSum = combSum.slice()
            newCombSum = newCombSum.sort((a,b) => a-b)
            if(!(newCombSum in resultsMap)){
                resultsMap[[...newCombSum]] = "Added"
                results.push(newCombSum)
            }
            return
        }

        for(let i = 0; i < candidates.length; i++){
            combSum.push(candidates[i])
            let newTarget = target - candidates[i]

            combine(newTarget, combSum)

            combSum.pop()
        }
        return
    }

    combine(target, [])
    
    return results

}

let candidates = [2,3,6,7]
let target = 8

console.log(combinationSum(candidates, target))