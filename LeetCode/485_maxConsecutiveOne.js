let maxConsecutiveOnes = function(nums){
    let max = 0
    let currentCount = 0

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            currentCount++
        } else {
            currentCount = 0
        }
        max = Math.max(max, currentCount)
    }
    return max
}

