let searchInsert = function (nums, target){

    function searchIndex(array){
        let n = array.length
        let midEle = array[Math.floor(n/2)] 

        if (target === midEle){
            return nums.indexOf(midEle)
        }

        if (array.length === 1){
            if (array[0] > target) return nums.indexOf(array[0])
            else return nums.indexOf(array[0]) + 1
        }


        if (target < midEle){
            let slicedArray = array.slice(0, array.indexOf(midEle))
            return searchIndex(slicedArray)
        } else {
            let slicedArray = array.slice(array.indexOf(midEle))
            return searchIndex(slicedArray)
        }

    }

    return searchIndex(nums)
}

let searchInsertIterative = function (nums, target){
    let [l,r] = [0, nums.length - 1]
    let mid = 0

    while(l <= r){
        mid = Math.floor((l+r)/2)

        if (nums[mid] === target) return mid

        if (target < nums[mid]){
            r = mid - 1
        } else {
            l = mid + 1
        }

    }
    return l

}

