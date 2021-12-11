let findKthLargest = function(nums, k){
    
    function maxHeapify (heap, pIndex){
        let leftIndex = 2 * pIndex + 1
        let rightIndex = 2 * pIndex + 2
        let largest = null
        let heapSize = heap.length
    
        if (leftIndex >= heapSize) return
    
        if (leftIndex < heapSize && heap[pIndex] < heap[leftIndex]){
            largest = leftIndex
        }
    
        if (rightIndex < heapSize && heap[leftIndex] < heap[rightIndex] && heap[pIndex] < heap[rightIndex]){
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

    let internalNodesLastIndex = Math.floor(array.length/2) - 1
    for (let i = internalNodesLastIndex; i >=0; i--){
        maxHeapify(array, i)
    }



    let element = null
    for (let i = 0; i < k; i++){
        element = nums[0]
        nums[0] = nums[nums.length-1]
        nums.pop()
        maxHeapify(nums, 0)
    }

    return element

}