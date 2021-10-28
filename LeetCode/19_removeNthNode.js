// ---------------------------- Kind of like a slow/fast appoach ---------------------//

let removeNode = function(head, n){
    let length = 1

    let prevNode = null
    let counter = -1 * n
    let currentNode = head

    while(currentNode.next){
        if(counter > 0){
            prevNode = prevNode.next
            currentNode = currentNode.next
            counter++
        }

        if (counter < 0){
            currentNode = currentNode.next
            counter++
        }

        if (counter === 0){
            prevNode = head
            counter++
        }

        length++
    }

    if (length === n){
        return head.next
    } else {
        prevNode.next = prevNode.next.next
        return head
    }

}