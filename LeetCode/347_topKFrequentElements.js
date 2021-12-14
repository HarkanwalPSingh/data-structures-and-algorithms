let topKFrequent = function(nums, k){

    let hashMap = {}

    for (let i = 0; i < nums.length; i++){
        if (!(nums[i] in hashMap)){
            hashMap[nums[i]] = [nums[i], 1]
        } else {
            hashMap[nums[i]][1] += 1
        }
    }

    let values = Object.values(hashMap)


    function maxHeapify (heap, pIndex){
        let leftIndex = 2 * pIndex + 1
        let rightIndex = 2 * pIndex + 2
        let largest = null
        let heapSize = heap.length
    
        if (leftIndex >= heapSize) return
    
        if (leftIndex < heapSize && heap[pIndex][1] < heap[leftIndex][1]){
            largest = leftIndex
        }
    
        if (rightIndex < heapSize && heap[leftIndex][1] < heap[rightIndex][1] && heap[pIndex][1] < heap[rightIndex][1]){
            largest = rightIndex
        }

    
        if (largest !== pIndex && largest !== null){
            let temp = heap[largest]
            heap[largest] = heap[pIndex]
            heap[pIndex] = temp
    
            maxHeapify(heap, largest)
        }
    
        return
    }

    let internalNodesLastIndex = Math.floor(values.length/2) - 1
    for (let i = internalNodesLastIndex; i >=0; i--){
        maxHeapify(values, i)
    }

    
    let result = []
    for (let i = 0; i < k; i++){
        results.push(values[0][0])
        values[0] = values[values.length-1]
        values.pop()
        maxHeapify(nums, 0)
    }
    return result
}