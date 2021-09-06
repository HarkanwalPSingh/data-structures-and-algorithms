let removeDuplicates = function(nums){
    let i = 0
    let j = 0
    let holdingValue = 0

    while(j < nums.length){
        if (nums[i] === nums[j]){
            j++
            continue
        }
        if (nums[i] < nums[j]){
            i++
            holdingValue = nums[i]
            nums[i] = nums[j]
            nums[j] = holdingValue
            j++
            continue
        }
        
    }
    return i+1
}

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))