// Merge sort O(nlogn) time complexity and O(logn) space complexity

// let sortColors = function (nums){

//     function merge(nums1, nums2){
//         let mergedArray = []
//         let i = 0
//         let j = 0

//         while(i < nums1.length || j < nums2.length){

//             if (i === nums1.length){
//                 mergedArray.push(nums2[j])
//                 j++
//             } else if (j === nums2.length){
//                 mergedArray.push(nums1[i])
//                 i++
//             } else if (nums1[i] <= nums2[j]){
//                 mergedArray.push(nums1[i])
//                 i++
//             } else if (nums1[i] > nums2[j]) {
//                 mergedArray.push(nums2[j])
//                 j++
//             }
//         }

//         return mergedArray
//     }

//     function mergeSort (input){
//         if (input.length <2) return input
        
//         let length = input.length
//         let arr1 = input.slice(0, Math.floor(length/2))
//         let arr2 = input.slice(Math.floor(length/2))


//         return merge(mergeSort(arr1), mergeSort(arr2))
//     }

//     return mergeSort(nums)

// }

// ---------------------------------- In place sorting solution -----------------------------//


let sortColors = function (nums){

    if (nums.length === 1) return nums

    let i = 0
    let j = 0

    while(j <= 1.5*nums.length){
        if (nums[i] === 0){
            if (i === 0){
                i++
            }else if (nums[i-1] === 0){
                i++
            } else {
                nums.splice(i,1)
                nums.unshift(0)
            }
        } else if (nums[i] === 1){
            i++
        } else if (nums[i] === 2){
            nums.splice(i,1)
            nums.push(2)

            // if (i === 0){
            //     nums.splice(i,1)
            //     nums.push(2)
            //     i++
            // }else if (nums[i-1] === 2 || nums[i-1] === 1){
            //     i++
            // } else {
            //     nums.splice(i,1)
            //     nums.push(2)
            // }
        }
        j++
    }

    return nums

}

let nums = [0,2,2,2,1,2,1,2,1,0,0,0,1]
console.log(sortColors(nums))