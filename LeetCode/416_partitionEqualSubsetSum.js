let canPatition = function(nums){
    let target = nums.reduce((a,b) => a + b)
    if (target%2 !== 0) return false 

    function dfs(start, sum, targetSum, memo={}){
       
        if (sum in memo) return memo[sum]
        if (sum === targetSum) return true
        if (sum > targetSum) return false
        if (start >= nums.length) return false
  
        
        for (let i = start; i < nums.length; i++){
            let num = nums[i]      
            if(dfs(i + 1, sum + num, targetSum - num, memo)){
                memo[sum] = true
                return true
            }
        }

        memo[sum] = false
        return false        
    }

    return dfs(0, 0, target)
    
}

console.log(canPatition([1,5,11,5]))