let copyRandomList = function(head){

    let currOriNode = head
    let oriToClone = new Map()

    while(currOriNode){
        let newNode = new Node (currOriNode.val)
        oriToClone[currOriNode] = newNode
        currOriNode = currOriNode.next
    }

    currOriNode = head

    while(currOriNode){
        oriToClone[currOriNode].next = oriToClone[currOriNode.next]
        oriToClone[currOriNode].random = oriToClone[currOriNode.random]
        currOriNode = currOriNode.next
    }

    return oriToClone[head]
}