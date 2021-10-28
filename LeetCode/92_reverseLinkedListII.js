let reverseBetween = function(head, left, right){
    if (left === right){
        return head
    }

    let currentNode = head
    let rightNext = null
    let leftPrev = null
    let currentPos = 1
    let prev = null
    let next = null
    let leftNode = null
    let rightNode = null

    while(currentNode){
        if (currentPos + 1 === left){
            leftPrev = currentNode
        }
        if (currentPos === right){
            rightNext = currentNode.next
            rightNode = currentNode
        }

        if (currentPos === left){
            prev = currentNode
            leftNode = currentNode
        }


        if (currentPos > left && currentPos <= right){
            next = currentNode.next
            currentNode.next = prev
            prev = currentNode
            currentNode = next
            currentPos++
            continue
        }
        currentNode = currentNode.next
        currentPos++

    }

    if (leftPrev){
        leftPrev.next = rightNode
        leftNode.next = rightNext
    }
    else {
        leftNode.next = rightNext
        return rightNode
    }

    return head
}