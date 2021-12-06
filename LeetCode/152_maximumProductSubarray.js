// -------------------------- Modified Kadane's Approach -----------------------\\

let maxProduct = function(nums){
    let curMax = 1
    let curMin = 1
    let maxPro = Number.NEGATIVE_INFINITY

    for (let n of nums){
        if (n === 0){
            curMax = 1
            curMin = 1
            maxPro = Math.max(maxPro, 0)
            continue
        }
        let temp = curMax
        curMax = Math.max(n * curMax, n * curMin, n)
        curMin = Math.min(n * temp, n * curMin, n)

        maxPro = Math.max(maxPro, curMax)

    }
    return maxPro
}

console.log(maxProduct([-2,-4, 10,0,-1,100]))