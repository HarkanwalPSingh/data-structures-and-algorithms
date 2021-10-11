let sortedArrayToBST = function(nums){

    function toBST(array){
        if (array.length === 0){
            return null
        }

        let parentNodeIndex = Math.floor(array.length/2) 
        
        let value = array[parentNodeIndex]
        let left = parentNodeIndex === 0 ? toBST([]) : toBST(array.slice(0, parentNodeIndex))
        let right = parentNodeIndex === array.length-1 ? toBST([]) : toBST(array.slice(parentNodeIndex+1))
        let treeNode = new TreeNode(value, left, right)

        return treeNode
    }

    return toBST(nums)
}