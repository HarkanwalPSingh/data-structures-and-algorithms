// --------------------------------- O(N) space complexity ----------------------------------//

// let productExceptSelf = function(nums){
//     let productBefore = new Array(nums.length)
//     let productAfter = new Array(nums.length)

//     productAfter.fill(1)
//     productBefore.fill(1)

//     let final = []
//     for (let i = nums.length-2; i >= 0; i--){
//         productAfter[i] = productAfter[i+1] * nums[i+1]
//     }
    
//     for (let i = 1; i < nums.length; i++){
//         productBefore[i] = productBefore[i-1] * nums[i-1]
//         final[i-1] = productBefore[i-1] * productAfter[i-1]
//     }

//     final.push(productAfter[nums.length-1] * productBefore[nums.length-1])

//     return final
// }

// let nums = [2, 4, 0, 1, 10]

// console.log(productExceptSelf(nums))

// --------------------------------------- O(1) space complexity ---------------------------------------------------//

let productExceptSelf = function(nums){
    let output = new Array(nums.length)

    output.fill(1)
    let postMultiplier = 1
    

    for (let i = 1; i < nums.length; i++){
        output[i] = output[i-1] * nums[i-1]
    }

    for (let i = nums.length-2; i >= 0; i--){
        postMultiplier *= nums[i+1] 
        output[i] = output[i] * postMultiplier
    }    

    return output
}

let nums = [2, 4, 3, 1, 10]

console.log(productExceptSelf(nums))