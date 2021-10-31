let houseRobberII = function(nums){
    let dp1 = []
    let dpn = []

    if (nums.length === 1){
        return nums[0]
    }

    if (nums.length === 2){
        return Math.max(nums[0], nums[1])
    }
    
    dp1 = [nums[0], Math.max(nums[0], nums[1])]
    dpn = [nums[1], Math.max(nums[1], nums[2])]

    for (let i = 2; i < nums.length-1; i++){
        dp1[i] = Math.max(nums[i] + dp1[i-2], dp[i-1])
        dpn[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
    }

    

    return Math.max(dp1[nums.length-2], dpn[nums.length-2])
}