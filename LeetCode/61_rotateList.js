let rotateList = function (head, k){
    let length = 0
    let currentNode = head
    let tail = 0
    let temp = 0

    while (currentNode){
        if (!currentNode.next){
            tail = currentNode
        }
        currentNode = currentNode.next
        length++
    }

    if (length< 2){
        return head
    }

    k = k%length

    if (k === 0){
        return head
    }

    let i = 0
    tail.next = head
    currentNode = head

    while(i < length - k){
        
        if (i === length-k-1){
            temp = currentNode.next 
            tail = currentNode
            tail.next = null
            head = temp
        }
        currentNode = currentNode.next
        i++
    }
    return head
    
}