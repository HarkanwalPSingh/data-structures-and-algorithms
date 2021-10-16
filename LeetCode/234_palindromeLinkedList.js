let isPalindrome = function(head){
    let valArray = []
    let currentNode = head

    while(currentNode){
        valArray.push(currentNode.val)
        currentNode = currentNode.next
    }

    for (let i = 0; i < Math.floor(valArray.length/2); i++){
        if (valArray[i] !== valArray[valArray.length-1-i]){
            return false
        }
    }
    return true
}