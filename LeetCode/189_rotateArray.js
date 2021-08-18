// Solution: 1

let nums = [1,2,3,4,5,6,7]
k = 3


let rotate1 = function(nums, k){
    if (k >= nums.length){
        k = k%nums.length
    }
    for (i = 0; i < k; i++){
        nums.unshift(nums.pop())
    }
    return nums
}

// console.log(rotate1(nums, k))

// Solution: 2

let rotate2 = function(nums, k){
    if (k >= nums.length){
        k = k%nums.length
    }
    nums = [...nums.slice(-k), ...nums.slice(0,-k)]
    return nums
}

// console.log(rotate2(nums, k))

// Solution: 3

let rotate3 = function(nums, k){
    if (k >= nums.length){
        k = k%nums.length
    }

    nums.splice(k,0, ...nums.splice(0, nums.length-k))
    return nums
}

console.log(rotate3(nums, k))