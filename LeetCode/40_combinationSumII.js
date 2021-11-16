let combinationSumII = function(candidates, target){
    let results = []

    function combine(start, combSum, sum){
        console.log(start, combSum)
        
        if (sum === target){
            results.push(combSum.slice())
            return
        }
        if (start >= candidates.length || sum > target) return
        

        combSum.push(candidates[start])
        combine(start + 1, combSum, sum + candidates[start])

        let popped = combSum.pop()
        while(popped === candidates[start]){
            start = start + 1
        }

        combine(start, combSum, sum)

        return
    }

    candidates = candidates.sort((a,b) => a-b)

    combine(0, [], 0)

    return results
}

let candidates = [2,5,2,1,2]
let target = 5

console.log(combinationSumII(candidates, target))