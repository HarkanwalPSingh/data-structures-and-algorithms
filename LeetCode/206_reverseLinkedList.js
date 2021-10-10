let reverseLinkedList = function(head){
    let prev = null
    let next  = null
    let currentNode = head

    while(currentNode){
        next = currentNode.next
        currentNode.next = prev
        prev = currentNode
        currentNode = next
    }
    return prev
}