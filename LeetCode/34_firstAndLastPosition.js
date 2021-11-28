let searchRange = function (nums, target){

    function ifPresent(nums, target){
        let [l,r] = [0, nums.length-1]
        let mid = null
        while (l <= r){
            mid = Math.floor((l+r)/2)

            if (nums[mid] === target){
                return mid
            } else if (nums[mid] > target){
                r = mid - 1
            } else{
                l = mid + 1
            }
        }
        return -1
    }

    function startPos(nums, target, posInRange){
        let [l,r] = [0, posInRange]
        let mid = null
        while (l <= r){
            mid = Math.floor((l+r)/2)
            console.log(l, r)

            if (l === r) return l

            if (nums[mid] === target){
                r = mid
            } else {
                l = mid + 1
            }
        }
    }

    function endPos(nums, target, posInRange){
        let [l,r] = [posInRange, nums.length-1]
        let mid = null
        while (l <= r){
            mid = Math.ceil((l+r)/2)

            if (l === r) return l

            if (nums[mid] === target){
                l = mid
            } else {
                r = mid - 1
            }
        }
    }

    let posInRange = ifPresent(nums, target)
    console.log(posInRange)
    if (posInRange === -1) return [-1,-1]

    let [start, end] = [startPos(nums, target, posInRange), endPos(nums, target, posInRange)]

    return [start, end]

}

let nums = [5,7,7,8,8,10]
let target = 8

console.log(searchRange(nums, target))