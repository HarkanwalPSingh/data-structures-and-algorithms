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

// let rob = function(nums){
//     if (nums.length === 0){
//         return 0
//     }
//     if (nums.length === 1){
//         return nums[0]
//     }
//     if (nums.length === 2){
//         return Math.max(nums[0], nums[1])
//     }

//     let dp = [nums[0], Math.max(nums[0], nums[1])]

//     for (let i = 2; i < nums.length; i++){
//         dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
//     }

//     return dp[dp.length-1]
// }

// Recursive memoised solution 

let rob = function(nums){

    function maxMoney (houses, memo = {}){
        if (houses.length in memo) return memo[houses.length]
        if (houses.length === 0) return 0
        if (houses.length <= 2){
            return Math.max(...houses)
        }

        let money = null

        let moneyFromFirstHouse = houses[0]
        let remainingHouses = houses.slice(2)
        
        let stolenMoneyRobbingFirstHouse = maxMoney(remainingHouses, memo)
        money = stolenMoneyRobbingFirstHouse + moneyFromFirstHouse


        let moneyFromSecondHouse = houses[1]
        remainingHouses = houses.slice(3)
    
        let stolenMoneyRobbingSecondHouse = maxMoney(remainingHouses, memo)
        money = Math.max(money, stolenMoneyRobbingSecondHouse + moneyFromSecondHouse)

        memo[houses.length] = money
        return money
    }

    return maxMoney(nums)

}

console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]))