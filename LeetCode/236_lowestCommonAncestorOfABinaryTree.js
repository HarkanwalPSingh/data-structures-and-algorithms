// Error: JS heap out of memory

let lca = function (root, p, q){
    let ancestor1 = []
    let ancestor2 = []


    function traverse(node, parent){
        if (node === null) return

        if (node.val === p.val) ancestor1 = parent
        if (node.val === q.val) ancestor2 = parent

        if (node.left){
            traverse(node.left, [...parent, node.left])
        }

        if (node.right){
            traverse(node.right, [...parent, node.right])
        }


        return
    }
    traverse(root, [root])


    let i = 0
    let j = 0
    let lowestCommonAncestor = null

    while(i < ancestor1.length && j < ancestor2.length){
        if (ancestor1[i].val !== ancestor2[j].val){
            return lowestCommonAncestor
        }
        if (ancestor1[i].val === ancestor2[j].val){
            lowestCommonAncestor = ancestor1[i]
            i++
            j++
            continue
        }

    }

    return lowestCommonAncestor

}

// Using solution 2 explained in youtube.com/watch?v=KobQcxdaZKY&t=921s

let lca = function (root, p, q){
    
    function traverse(node){
        if (node === null) return null

        let leftChild = traverse(node.left)
        let rightChild = traverse(node.right)

        console.log(leftChild, rightChild)

        if (leftChild === null && rightChild === null){
            if (node === q) return node
            if (node === p) return node
            return null
        }

        if (leftChild !== null){
            if (node === q) return node
            if (node === p) return node
            return leftChild
        }

        if (rightChild !== null){
            if (node === q) return node
            if (node === p) return node
            return rightChild
        }

        if (leftChild !== null && rightChild !== null){
            return node
        }

    }

    return traverse(root)

}