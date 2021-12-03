let findMind = function(nums){
    function findStart (array) {

        let localTarget  = array[array.length-1]
        let [l, r] = [0, array.length -1]
        let mid = null

        while(l <= r){
            mid = Math.floor((l+r)/2)

            if (array[mid] > localTarget){
                l = mid + 1
            } else if (array[mid] < localTarget){
                r = mid
                localTarget = array[mid]
            } else if (l === r) {
                return l
            }
        }

    }

    if (nums[0] < nums[nums.length - 1]){
        return nums[0]
    } else {
        let start = findStart(nums)
        return nums[start]
    }
}