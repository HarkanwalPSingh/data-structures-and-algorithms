let sumNumbers = function (root){
    let sum = 0

    function traverse (node, parVal){
        if (node === null){
            return null
        }

        let leftNode = traverse(node.left, 10*parVal + node.val)
        let rightNode = traverse(node.right, 10*parVal + node.val)

        console.log(leftNode, rightNode)

        if (leftNode === null && rightNode === null){
            sum += 10*nodeVal + node.val
        }

        return node
    }

    traverse(root, 0)

    return sum
   

}