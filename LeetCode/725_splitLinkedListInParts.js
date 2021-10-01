let splitListToParts = function(head, k){
    let output = []
    let length = 0
    let currentNode = head
    let listNodesArray = []
    let lengthOfEachPart = []

    
    while(currentNode){
        listNodesArray.push(currentNode)
        currentNode = currentNode.next
        length++
    }

    let equalLength = Math.floor(length/k)
    let remainder = length%k

    for (let i = 1; i <= k; i++){
        if(i <= remainder){
            lengthOfEachPart[i-1] = equalLength + 1
        } else {
            lengthOfEachPart[i-1] = equalLength
        }
    }
    let headOfEachLL = head
    let tail = listNodesArray[lengthOfEachPart[0]-1]
    let index = 0

    for (let i = 0; i < k ; i++){
        index = index + lengthOfEachPart[i]
        
        if (listNodesArray[index-1] === undefined){
            output[i] = null
            continue
        }
        headOfEachLL = currentNode
        output[i] = headOfEachLL
        
        tail = listNodesArray[index-1]
        currentNode = tail.next
        tail.next = null
    }
    return output

}