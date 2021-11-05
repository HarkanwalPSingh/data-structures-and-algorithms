let hasPathSum = function(root, targetSum){

    let hasPath = false

    function traverse (node, parentVal, currSum) {
        if (!node){
            return null
        }

        currSum += parentVal + node.val

        let leftChild = traverse(node.left, node.val, currSum)
        let rightChild = traverse(node.right, node.val, currSum)

        if (leftChild === null && rightChild === null && currSum === targetSum){
            hasPath = true
        }

        return node
    }

    traverse(root, 0, 0)

    return hasPath
}