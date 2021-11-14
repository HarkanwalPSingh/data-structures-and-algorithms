let nextGreaterElement = function(nums1, nums2){
    let stack = []
    let nextGreaterMap ={}

    for (let i = nums2.length-1; i >= 0; i--){
        
        while(nums2[i] > stack[stack.length-1] && stack.length !== 0){
            stack.pop()
        }

        if(stack.length === 0){
            nextGreaterElement[nums2[i]] = -1
        }

        if (nums2[i] < stack[stack.length-1]){
            nextGreaterElement[nums2[i]] = stack[stack.length-1]
        }

        stack.push(nums2[i])
    }

    for (let i = 0; i < nums1.length; i++){
        nums1[i] = nextGreaterElement[nums1[i]]
    }

    return nums1
}