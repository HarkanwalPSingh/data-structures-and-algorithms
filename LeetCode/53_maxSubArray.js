let nums1 = [8,5,4,-1,7,8,8,8]

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

// console.log(maxSubArray1(nums1))


// Solution 2: O(n2) solution

let nums2 = [8,-2,-4,-1,-8,3,8,8,3,4,2,-9,-1,-3,-6,8,-3,9]

let maxSubArray2 = function(nums) {
    let maxSum = nums[0]
    let currentSum = 0

    let i = 0
    let j = 0
    while( i < nums.length && j < nums.length){

        currentSum = currentSum + nums[j]
        if (currentSum > maxSum){
            maxSum = currentSum
        }
        
        j++
        if(j === nums.length){
            i++
            j = i
            currentSum = 0
        }
        
    }
    return maxSum
    // var curSum=nums[0];
    // var maxSum=nums[0];
   
    // for(var i = 1 ; i < nums.length ; i++){
    //     var num = nums[i];
    //     curSum = Math.max(num,curSum+num);    
    //     maxSum = Math.max(maxSum,curSum);          
    // }
    // return maxSum;
}

console.log(maxSubArray2(nums2))