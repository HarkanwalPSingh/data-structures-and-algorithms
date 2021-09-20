let bubbleSort = function(nums){
    let i = 0
    let j = nums.length-1
    let temp = 0

    while (i<j){
        if (nums[i]>nums[i+1]){
            temp = nums[i]
            nums[i] = nums[i+1]
            nums[i+1] = temp
        }
        i++
        if (i===j){
            i = 0
            j--
        }
    }

    return nums
}

console.log(bubbleSort([1,4,5,3,23,43,56,2,1,2,4,5,6,8]))