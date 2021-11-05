let leftsum = function(root){

    if(!root.left && !root.right) return 0

    let sum = 0

    function dfs (node){
        if (!node) return 2000

        let leftChild = dfs(node.left)
        let rightChild = dfs(node.right)

        if (leftChild === 2000 && rightChild === 2000){
            return node.val
        }

        if (node.left){
            if (node.left.left === null && node.left.right === null){
                sum += leftChild
            }
        }

        return node.val
    }

    dfs(node)

    return sum
}