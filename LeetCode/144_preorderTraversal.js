let preorderTraversal = function(root){
    let output = []

    let traversal = function(node){
        if (node === null){
            return
        }

        output.push(node.val)
        traversal(node.left)
        traversal(node.right)
        return
    }

    traversal(root)
    return output
}