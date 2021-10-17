// Solution 1: Using Hashmap
var hasCycle = function(head) {
    let currentNode = head
     let visitedNode = {}
     
     if (!head) return false


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
};





// Solution 2: Floyd's tortoise and hare algo
let hasCycle = function(head){
    if (head === null){
        return false
    }

    let slow = head
    let fast = head.next
    
    while(slow !== fast){
        
        if (fast === null || fast.next === null){
            return false
        }

        slow = slow.next
        fast = fast.next.next
        
    }
    return true
}