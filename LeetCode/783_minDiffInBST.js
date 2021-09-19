let minDiffInBST = function(root){
    let output = []

    let inorderTraversal = function(node){

        if (node === null){
            return
        }

        inorderTraversal(node.left)
        output.push(node.val)
        inorderTraversal(node.right)

        return
    }
    inorderTraversal(root)
    output = output.sort((a,b) => a-b)

    let min = output[output.length-1] - output[0]

    for(let i = 0; i<output.length-1; i++){
        min = Math.min(output[i+1] - output[i], min)
    }
    return min

}