let findTilt = function(root){
    let tilt = 0

    function dfs(node){
        if (!node) return 0

        let leftChild = dfs(node.left)
        let rightChild = dfs(node.right)

        tilt += Math.abs(leftChild-rightChild)

        return node.val + leftChild + rightChild
    }

    dfs(root)
    return tilt
}