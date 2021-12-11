let getDecimalValue = function(head){
    let binaryString = ""

    let currentNode = head

    while(currentNode){
        binaryString = binaryString + currentNode.val.toString()
        currentNode = currentNode.next
    }

    return parseInt(binaryString, 2)

}