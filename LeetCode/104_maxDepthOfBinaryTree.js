let maxDepth = function(root){
    let maximumDepth = 0

    if(!root){
        return maximumDepth
    }

    function traversal(node, depth){
        if (node === null){
            return
        }
        maximumDepth = Math.max(maximumDepth, depth)
        traversal(node.left, depth+1)
        traversal(node.right, depth+1)

        return
    }
    traversal(root, 1)

    return maximumDepth
}