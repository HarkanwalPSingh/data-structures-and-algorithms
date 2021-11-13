let connect = function(root){
    if (!root) return root

    let queue = []
    queue.push(root)
    queue.push(null)
    let currentNode = null
    let nextNode = null

    while(queue.length !== 0){
        currentNode = queue.shift()
        
     if (currentNode === null){
            if (queue.length === 0){
                break
            }
            queue.push(null)
            continue
        } else {
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right)queue.push(currentNode.right)
        }

        nextNode = queue[0]
        currentNode.next = nextNode

    }
    return root 

}