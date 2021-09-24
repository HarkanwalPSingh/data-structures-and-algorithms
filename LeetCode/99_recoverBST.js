let recoverTree = function(root){
    let treeNodes = []

    function inorderTraversal(node){
        if (node === null){
            return 
        }

        inorderTraversal(node.left)
        treeNodes.push(node)
        inorderTraversal(node.right)

        return
    }

    inorderTraversal(root)
    let firstWrongNode = 0
    let secondWrongNode = 0

    for(let i = 0; i < treeNodes.length-1; i++){
        if(treeNodes[i].val > treeNodes[i+1].val){
            if (!firstWrongNode){
                firstWrongNode = treeNodes[i]
            }
            secondWrongNode = treeNodes[i+1]

        }
    }
    let temp = firstWrongNode.val
    firstWrongNode.val = secondWrongNode.val
    secondWrongNode.val = temp

}