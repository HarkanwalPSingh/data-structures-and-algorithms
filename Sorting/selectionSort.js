let selectionSort = function(nums){
    let i = 0
    let j = nums.length-1
    let counter = 0
    let min = nums[counter]
    let index = 0

    while (i<=j){
        if (nums[i] < min){
           min = nums[i]
           index = i
        }
        i++
        

        if (i>j){
            nums[index] = nums[counter]
            nums[counter] = min 
            counter++
            min = nums[counter]
            i = counter
            index = counter
        }
        console.log(nums)
    }

    return nums
}

console.log(selectionSort([1,4,5,3,23,43,56,2,1,2,4,5,6,8]))