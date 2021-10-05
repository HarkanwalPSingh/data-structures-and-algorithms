let singleNumber = function(nums){
    // Used the concept of XOR
    let result = 0

    for (let i = 0; i < nums.length; i++){
        result = result ^ nums[i]
    }

    return result
}