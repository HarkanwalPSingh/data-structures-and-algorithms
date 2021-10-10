let invertTree = function(root){
    
    function swapLeftRight (node){
        if(!node) {
            return 
        }

        let temp = node.left
        node.left = node.right
        node.right = temp
     
        
        swapLeftRight(node.left)
        swapLeftRight(node.right)
        return

    }

    swapLeftRight(root)

    return root
}