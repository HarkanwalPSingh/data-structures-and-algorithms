let buildTree = function(preorder, inorder){
     let root = new TreeNode(preorder[0])
     let left = inorder.slice(0, inorder.indexOf(root.val))
     let right = inorder.slice(inorder.indexOf(root.val) + 1)
     preorder.shift()

    function construct (root, preorder, left, right){
        if (preorder.length === 0) return 
        if (left.length === 0) root.left = null
        if (right.length === 0) root.right = null

        let nextNodeVal = preorder[0]

        if (left.indexOf(nextNodeVal) !== -1){
            let nextNode = new TreeNode(nextNodeVal)
            root.left = nextNode
            let newLeft = left.slice(0, left.indexOf(nextNodeVal))
            let newRight = left.slice(left.indexOf(nextNodeVal) + 1)
            preorder.shift()
            construct(nextNode, preorder, newLeft, newRight)
        }

        nextNodeVal = preorder[0]

        if (right.indexOf(nextNodeVal) !== -1){
            let nextNode = new TreeNode(nextNodeVal)
            root.right = nextNode
            let newLeft = right.slice(0, right.indexOf(nextNodeVal))
            let newRight = right.slice(right.indexOf(nextNodeVal) + 1)
            preorder.shift()
            construct(nextNode, preorder, newLeft, newRight)
        }

        return
    }

    construct(root, preorder, left, right)

    return root
}