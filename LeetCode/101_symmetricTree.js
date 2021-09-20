let symmetric = function(root){
    let traversedLeftNodes = []
    let traversedRightNodes = []

    let traversalLeft = function(node){
        let output = []
        if (node === null){
            return ["null"]
        }
        let leftReturn = traversalLeft(node.left)
        output = [...output,...leftReturn]
        output.push(node.val)
        let rightReturn = traversalLeft(node.right)
        output = [...output,...rightReturn]
        
        traversedLeftNodes = [...output]

        return [...output]
    }

    let traversalRight = function(node){
        let output = []
        if (node === null){
            return ["null"]
        }

        let rightReturn = traversalRight(node.right)
        output = [...output,...rightReturn]
        output.push(node.val)
        let leftReturn = traversalRight(node.left)
        output = [...output,...leftReturn]
        
        traversedRightNodes = [...output]

        return [...output]
    }

    traversalLeft(root)
    traversalRight(root)

    for (let i=0; i<(traversedLeftNodes.length); i++){
        if (traversedLeftNodes[i] !== traversedRightNodes[i]){
            return false
        }
    }
    return true

}