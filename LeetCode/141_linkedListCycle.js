let hasCycle = function(head){
    let currentNode = head
    let visitedNode = {}


    while(true){
        if (currentNode.next === null){
            return false
        }
        if (currentNode.val in visitedNode && visitedNode[currentNode.val] === currentNode){
            return true
        }
        visitedNode[currentNode.val] = currentNode
        currentNode = currentNode.next
    }
}