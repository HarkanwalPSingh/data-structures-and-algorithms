// Solution 1

let nums1 = [0,1,0,3,12]

let moveZeros1 = function(nums){   
    let i = 0
    let j = 0

    while (j < nums.length-1){

        if (nums[i] ===0){
            nums.splice(i,1)
            nums.push(0)
        } else {
            i++
        }
        j++
    }
return nums
}

console.log(moveZeros1(nums1))

// Solution 2

let nums2 = [0,1,0,3,12]

let moveZeros2 = function(nums){   
    let i = 0
    let j = 0
    let prefix = []
    let suffix = []


    while (j < nums.length-1){

        if (i === 0 && nums[i] ===0){
            suffix = nums.slice(i+1)
            nums = [...prefix, ...suffix, 0] 
        }else if (nums[i] === 0){
            prefix = nums.slice(0,i)
            suffix = nums.slice(i+1)
            nums = [...prefix, ...suffix, 0] 
        } else {
            i++
        }
        j++
    }
return nums
}

// console.log(moveZeros2(nums))