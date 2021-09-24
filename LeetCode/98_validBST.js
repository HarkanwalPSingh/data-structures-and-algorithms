let isValid = function(root){
    let output = []

    function inorderTraversal(node, list){
        if(node === null){
            return list
        }

        list = inorderTraversal(node.left, list)
        list.push(node.val)
        list = inorderTraversal(node.right, list)

        return list
    }

    output = inorderTraversal(root, [])

    for (let i = 0; i < output.length-1; i++){
        if (output[i]>=output[i+1]){
            return false
        }
    }
    return true
}