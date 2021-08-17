

// Soulution 1: Brute force O(n3) time complexity    

let maxSubArray1 = function(nums){
    let maxSum = nums[0]
    let currentSum = 0

    function sumOfArray(array, startIndex, endIndex){
        let calSum = 0
        for (let i = startIndex; i < endIndex + 1; i++){
            calSum = calSum + array[i]
        }
        return calSum
    }


    for (let i = 0; i < nums.length ; i++){
        for (let j = i; j < nums.length ; j++ ){

            currentSum = sumOfArray(nums, i, j)
    
            if (currentSum > maxSum){
                maxSum = currentSum
            }
        }
    }
    
    return maxSum
}

// console.log(maxSubArray1(nums))


// Solution 2: Find max and then find a substring containing that number
let nums = [8,5,4,-1,7,8,8,8]

let maxSubArray2 = function(nums) {
    let maxNumber = Math.max(...nums)
    let maxNumberIndex = nums.indexOf(maxNumber)
    let maxSum = maxNumber

    function sumOfArray(array, startIndex, endIndex){
        let calSum = 0
        for (let i = startIndex; i < endIndex + 1; i++){
            calSum = calSum + array[i]
        }
        return calSum
    }
    let i = j = maxNumberIndex

    while( i >= 0 && j < nums.length){

    }


   

    return (maxNumberIndex, maxSum, maxNumber)
    
}

console.log(maxSubArray2(nums))