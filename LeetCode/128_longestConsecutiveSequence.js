let longestConsecutive = function(nums){
    let set = new Set(nums)
    let longestLength = 0
    let sequences = {}
    let currentLength = 0

    for(let i = 0; i < nums.length; i++){
        if (!(set.has(nums[i]-1))){

            let num = nums[i]
            
            while(true){
                if (set.has(num)){
                    currentLength++
                    num = num+1
                } else {
                    break
                }
            }
            longestLength = Math.max(currentLength, longestLength)
            currentLength = 0

        }
    }
    return longestLength


}

let nums = [0,3,7,2,5,8,4,6,0,1]

console.log(longestConsecutive(nums))