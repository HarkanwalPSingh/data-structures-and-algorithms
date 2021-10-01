let sortArrayByParityII = function(nums){
    let temp = 0

    for (let i = 0; i < nums.length; i++){
        if (i % 2 === 0 && nums[i] % 2 !==0){
            let j = i + 1
            while(j < nums.length){
                if (j % 2 !== 0 && nums[j] % 2 ===0){
                    break
                }
                j++
            }

            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }

        if (i % 2 !== 0 && nums[i] % 2 ===0){
            let j = i + 1
            while(j < nums.length){
                if (j % 2 === 0 && nums[j] % 2 !==0){
                    break
                }
                j++
            }

            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }


    }
    return nums
}

console.log(sortArrayByParityII([3,1,4,2]))