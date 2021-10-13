let maximumWidth = function(root){
    let maxWidth = 1
    let currentLevelNodes = []
    let queue = []
    
    if (!root){
        return 0
    }

    root.val = "0"
    queue.push(root)
    queue.push(null)

    while(queue.length !==0){
        
        let currentNode = queue[0]
        

        if (currentNode === null && currentLevelNodes.length !== 0){
            
            if(queue.length > 1){
              queue.push(null)  
            } 
            
            let leftmost =  currentLevelNodes[0] 
            let rightmost = currentLevelNodes[currentLevelNodes.length-1] 
            maxWidth = Math.max( parseInt(rightmost, 2) - parseInt(leftmost, 2) + 1 , maxWidth)
            
            currentLevelNodes = []

        } else if (currentNode === null && currentLevelNodes.length === 0){
            break
        }else {
            if (currentNode.left){
                queue.push(currentNode.left)
                currentNode.left.val = currentNode.val +  "0"
                if (currentNode.left.val.length > 32) currentNode.left.val = currentNode.left.val.slice(1)
                currentLevelNodes.push(currentNode.left.val)
                }  if (currentNode.right){
                queue.push(currentNode.right)
                currentNode.right.val = currentNode.val + "1"
                if (currentNode.right.val.length > 32) currentNode.right.val = currentNode.right.val.slice(1)
                currentLevelNodes.push(currentNode.right.val)
                }
        }
        

        
        queue.shift()
        

    }
    return maxWidth
}