// let mergeTwoLists = function(l1, l2){
    
    // if (!l1 && !l2){
    //     return null
    // } else if (!l1){
    //     return l2
    // } else if (!l2){
    //     return l1
    // }

//     let head = l1.val <= l2.val ? l1 : l2
//     let otherNode = head === l1 ? l2 : l1
//     let currentNode = head
    

//     while (currentNode.next && otherNode){

//         if (currentNode.next.val <= otherNode.val){
//             currentNode = currentNode.next
//         } else if (currentNode.next.val > otherNode.val){
//             let temp
//             temp = currentNode.next
//             currentNode.next = otherNode
//             currentNode = currentNode.next
//             otherNode = temp
//         }
//     }
//     if (!currentNode.next){
//         currentNode.next = otherNode
//     }

//     return head
// }

let mergeTwoLists = function(l1, l2){
    
    if (!l1 && !l2){
        return null
    } else if (!l1){
        return l2
    } else if (!l2){
        return l1
    }

    let head = new ListNode()
    let currentNode = head
    

    while (l1 !== null && l2 !== null){

        if (l1.val <= l2.val){
            currentNode.next = l1
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }
        currentNode = currentNode.next
    }
    if (l1 === null) {currentNode.next = l2}
    if (l2 === null) {currentNode.next = l1}

    return head.next
}