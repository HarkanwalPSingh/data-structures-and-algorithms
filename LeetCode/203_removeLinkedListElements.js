let removeElements = function(head, val){
    let prevNode = null
    let currNode = head

    while(currNode){
        if (currNode.val === val){
            if (prevNode){
                prevNode.next = currNode.next
                prevNode = currNode
                currNode = currNode.next
            } else {
                currNode = currNode.next
                head = currNode
            }
            continue
        }
        prevNode = currNode
        currNode = currNode.next
    }

    if (head.val === val){
        return null
    } else return head

}