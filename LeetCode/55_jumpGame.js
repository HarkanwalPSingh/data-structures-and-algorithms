let canJump = function(nums){
    if (nums.length === 1){
        return true
    }

    let noOfZeros = 0

    for (let i = nums.length-2; i >= 0; i--){
        if (nums[i] !== 0 && noOfZeros!==0){
            if (nums[i] <= noOfZeros) return false
            noOfZeros = 0
        }

        if (nums[i] === 0){
            noOfZeros++
        }
    }
    return true
}

console.log(canJump([2,3,1,0,4]))