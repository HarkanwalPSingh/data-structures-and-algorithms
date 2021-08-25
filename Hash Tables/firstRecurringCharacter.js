let firstRecurringCharacter = function (nums){
    let seen = {}
    
    for (let i = 0; i < nums.length; i++){
        if(nums[i] in seen){
            return nums[i]
        } else {
            seen[nums[i]] = i
        }
    }
    return undefined
}

let nums = [2,3,4,5,6,1,2]

console.log(firstRecurringCharacter(nums))