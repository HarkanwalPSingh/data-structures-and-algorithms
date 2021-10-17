// Hint: fill up nums1 array from behind


let merge = function(nums1, m, nums2, n){
    

        while(m + n -1 >= 0){

            if (m === 0){
                nums1[m+n-1] = nums2[n-1]
                n-- 
            }
            if (n === 0){
                nums1[m+n-1] = nums1[m-1]
                m--
            }

            if (nums1[m-1] > nums2[n-1]){
                nums1[m+n-1] = nums1[m-1]
                m--
            }
            if (nums1[m-1] <= nums2[n-1]){
                nums1[m+n-1] = nums2[n-1]
                n--
            }
        
        }


}

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,3,4]
let n = 3


merge(nums1, m, nums2, n)