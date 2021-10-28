let kthSmallest = function(root, k){
    let inorderArray = []

    function inorderTraverse(node){
        if (node === null) return


        inorderTraverse(node.left)
        inorderArray.push(node.val)
        inorderTraverse(node.right)

        return
    }
    inorderTraverse(root)

    return inorderArray[k-1]

}