let addTwoNumbers = function(l1, l2){
    let currentNode = new ListNode(0, null)
    let carryIn = 0
    let head = currentNode

    while (l1 || l2){

        if (l1 && l2){
            if (l1.val + l2.val + carryIn > 9){
                currentNode.val = (l1.val + l2.val + carryIn)%10
                carryIn = 1
            } else {
                currentNode.val = (l1.val + l2.val + carryIn)
                carryIn = 0
            }
        } else if (!l1 && l2){
            if (l2.val + carryIn > 9){
                currentNode.val = (l2.val + carryIn)%10
                carryIn = 1
            } else {
                currentNode.val = (l2.val + carryIn)
                carryIn = 0
            }
        } else if (l1 && !l2){
            if (l1.val + carryIn > 9){
                currentNode.val = (l1.val + carryIn)%10
                carryIn = 1
            } else {
                currentNode.val = (l1.val + carryIn)
                carryIn = 0
            }
        }

        l1 = l1 === null ? null : l1.next
        l2 = l2 === null ? null : l2.next

        if (l1 || l2){
            let nextNode = new ListNode()
            currentNode.next = nextNode
            currentNode = nextNode 
        } else if (!l1 && !l2 && carryIn === 1){
            let nextNode = new ListNode()
            nextNode.val = carryIn
            currentNode.next = nextNode
            return head
        } else if (!l1 && !l2 && carryIn === 0){
            return head
        }
    }

}