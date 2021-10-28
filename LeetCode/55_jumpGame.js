// ------------------------------------------------------ Dynamic Programming Solution -------------------------------------------------------------//

// let canJump = function(nums){
//     if (nums.length === 1){
//         return true
//     }
//     let n = nums.length-1
//     let canJumpTillEnd = false
//     let dp = {}

//     function jump(index){
//         if (index === n){
//             canJumpTillEnd = true
//             return 
//         }

//         for (let i = 0; i <nums[index]; i++){
//             if (!(i + 1 + index in dp) && (i + 1 + index) <= n){
//                 jump(i + 1 + index)
//                 dp[i + 1 + index] = "visited"
//             }
//         }

//         return 
//     }

//     jump(0)
//     return canJumpTillEnd
// }


// -------------------------------------------------- Greedy Algo solution ----------------------------------------------------------------------------------//

let canJump = function(nums){

    if (nums.length === 1){
        return true
    }

    let endPoint = nums.length - 1
    let i = endPoint - 1

    while (i >= 0){
        if (endPoint - i <= nums[i]){
            endPoint = i
        }
        i--
    }

    if (endPoint === 0){
        return true
    } else {
        return false
    }
    

}



let nums = [2,3,1,0,4]
console.log(canJump(nums))