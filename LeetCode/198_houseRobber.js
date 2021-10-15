// let rob = function(nums){
//    nums.unshift(0)
//    let max = 0
//    let cache = {}

//    function maxMoney(houseNo){
//         if (houseNo in cache){
//             return cache[houseNo]
//         }else {
//             if (houseNo < 3){
//                 return 0
//             }
//             let money = Math.max(maxMoney(houseNo-2) + nums[houseNo-2], maxMoney(houseNo-3) + nums[houseNo-3])
//             cache[houseNo] = money
//             return money
//         }    
//    }

  
//     max  = maxMoney(nums.length-1) + nums[nums.length-1]
//     max  = Math.max(maxMoney(nums.length-2) + nums[nums.length-2], max)

//     return max
// }

// console.log(rob([2,7,9,3,1]))

// Easy to follow recursive solution


// var rob = function(nums) {
//     if (nums.length <= 2) {
//         return Math.max(...nums);
//     }
//     nums.unshift(0);
//     for (let i = 3; i < nums.length; i++) {
//         nums[i] += Math.max(nums[i-2], nums[i-3]);
//     }
//     return Math.max(nums[nums.length-1], nums[nums.length-2]);
// };

// Use Dynamic Programming. Maintain an array which tells that upto ith house how much max money can be robbed. 

let rob = function(nums){
    if (nums.length === 0){
        return 0
    }
    if (nums.length === 1){
        return nums[0]
    }
    if (nums.length === 2){
        return Math.max(nums[0], nums[1])
    }

    let dp = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++){
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
    }

    return dp[dp.length-1]
}