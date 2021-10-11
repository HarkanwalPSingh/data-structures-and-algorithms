let intersectionOfTwoArrays = function(nums1, nums2){
    let hashMap = {}
    let intersectedArray = []

    for (let i = 0; i < nums1.length; i++){
        if(nums1[i] in hashMap){
            hashMap[nums1[i]] += 1
        } else {
            hashMap[nums1[i]] = 1
        }
    }

    for (let i = 0; i < nums2.length; i++){
        if (nums2[i] in hashMap){
            hashMap[nums2[i]] -= 1
            intersectedArray.push(nums2[i])
            if (hashMap[nums2[i]] === 0){
                delete hashMap[nums2[i]]
            }
        }
    }

    return intersectedArray
}