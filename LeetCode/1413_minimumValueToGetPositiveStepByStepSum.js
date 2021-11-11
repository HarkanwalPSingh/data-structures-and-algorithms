let minStartValue = function(nums){
    let currentSum = 0
    let minSum = 0

    for (let i = 0; i < nums.length; i++){
        currentSum += nums[i]
        minSum = Math.min(currentSum, minSum)
    }

    if (minSum>=1){
        return minSum
    } else {
        return Math.abe(minSum) + 1
    }
}