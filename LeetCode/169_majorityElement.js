// let majorityElement = function(nums){
//     let hashMap = {}
//     let maxRepetition = 0
//     let key = 0

//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] in hashMap){
//             hashMap[nums[i]] += 1
//             if (maxRepetition < hashMap[nums[i]]){
//                 maxRepetition = hashMap[nums[i]]
//                 key = nums[i]
//             }
//         } else {
//             hashMap[nums[i]] = 1
//         }
//     }
//     return key
// }

let majorityElement = function(nums){ //O(1) space
    let majEle = nums[i]
    let count = 1
    

    for (let i = 1; i < nums.length; i++){
        if (count === 0){
            majEle = nums[i]
        }else {
            if (majEle === nums[i]){
                count++
            } else {
                count--
            }
        }
    }
    return majEle
}