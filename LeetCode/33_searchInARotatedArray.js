let search = function(nums, target){
    function binarySearch(array, target){
        let [l,r] = [0, array.length]
        let mid = null
        while (l <= r){
            mid = Math.floor((l+r)/2)

            

            if (l === r && array[mid] !== target) return -1

            if (array[mid] < target){
                l = mid + 1
            } else if (array[mid] > target){
                r = mid - 1
            } else {
                return mid
            }
        }

        return -1
    }

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
        return binarySearch(nums, target)
    } else {
        let start = findStart(nums)
        if (target >= nums[start] && target <= nums[nums.length-1]){
            let index = binarySearch(nums.slice(start), target) 
            if (index !== -1) return index + start
            return index
        } 
        else return binarySearch(nums.slice(0, start), target)
    }


}

let nums = [5,1,3]
let target = 2
console.log(search(nums, target))