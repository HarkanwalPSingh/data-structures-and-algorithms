// Solution using hashmap hence O(n) space complexity

let getIntersectionNode = function(headA, headB){
    let visitedNodes = {}
    let currentNode = headA
    while(currentNode){

        if(currentNode.val in visitedNodes){
            visitedNodes[currentNode.val].push(currentNode)
        
        } else {
            visitedNodes[currentNode.val] = []
            visitedNodes[currentNode.val].push(currentNode)
        }

        currentNode = currentNode.next
    }


    currentNode = headB
    while(currentNode){
        if (currentNode.val in visitedNodes){
            for (let i = 0; i < visitedNodes[currentNode.val].length; i++){
                if (visitedNodes[currentNode.val][i] === currentNode){
                    return currentNode
                }
            }
        }
        currentNode = currentNode.next
    }
    return null
}

// Solution with O(1) space complexity 

let getIntersectionNode = function(headA, headB){
    let pointer1 = headA
    let pointer2 = headB

    while(pointer1 !== pointer2){
        if (pointer1 === null){
            pointer1 = headB
        } else {
            pointer1 = pointer1.next
        }

        if (pointer2 === null){
            pointer2 = headA
        } else {
            pointer2 = pointer2.next
        }
    }
    return pointer1
}