// Recursive solution with memisation. It should be O(n2) time complexity solution but LeetCode submission time
// does not suggest so. Check what am I missing.  


let lengthOfLIS = function (nums){

    function dfsLongestSubsequence (start, parentValue, memo = {}){
        if (start in memo) return memo[start]
        console.log(memo)
        if (start >= nums.length) return 0

        let maxLength = 0

        for (let i = start; i < nums.length; i++){
            let val = nums[i]
            if (val > parentValue){
                let outputLength = dfsLongestSubsequence (i + 1, val , memo)
                maxLength = Math.max(outputLength + 1, maxLength)
            }
        }
        
        memo[start] = maxLength
        return maxLength
    }

    return dfsLongestSubsequence(0, -10001)

}

let nums = [1,2,3,4,5,6,7]

console.log(lengthOfLIS(nums))