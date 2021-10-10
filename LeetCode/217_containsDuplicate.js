Solution: 1

let nums = [1,2,3,4,1]

let containsDuplicate = function(nums){
    let seen = {[nums[0]]: 0}
    for (i = 1; i < nums.length; i++){
        if(nums[i] in seen){
            return true
        }
        seen = {...seen, [nums[i]]:i}
    }
    return false
}

console.log(containsDuplicate(nums))

