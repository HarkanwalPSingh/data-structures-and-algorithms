// Linked list 10-->5-->16

// myLinkedList = {
//     head: {
//         value: 10, 
//         next: {
//             value: 5,
//             next: {
//                 value:16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = new Node(value)

        // let i = 0
        // let currentNode = this.head
        // while(i< this.length){

        //     if (currentNode.next === null){
        //         currentNode.next = newNode
        //     }
            
        //     currentNode = currentNode.next
        //     i++
        // }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    insert(index, value){
        const newNode = new Node(value)
        let i = 0
        let currentNode = this.head

        if (index >= this.length){
            this.append(value)
        }

        while(i <= index){
            if(i === index -1){
                newNode.next = currentNode.next
                currentNode.next = newNode
            }
            currentNode = currentNode.next
            i++
        }
        this.length++
    }

    remove(index){
        let currentNode = this.head
        let i = 0
        if (index === 0){
            this.head = this.head.next
            this.length--
        }else if (index >= this.length){
            this.remove(this.length-1)
        } else {
        while(i <= index){
            if (i === index -1){
                currentNode.next = currentNode.next.next
                break
            }
            currentNode = currentNode.next
            i++
        }
        this.length--
    }        
    }

    reverse() {
        const reversedLinkedList = new LinkedList(this.head.value)
        let currentNode = this.head
        currentNode = currentNode.next
        let revNextNode = reversedLinkedList.tail 
        
        while(currentNode !== null){
            const newNode = new Node(currentNode.value)
            newNode.next = revNextNode
            reversedLinkedList.head = newNode
            revNextNode = newNode
            currentNode = currentNode.next
            reversedLinkedList.length++
         }
        return reversedLinkedList
    }

    printList(){
        let linkedList = ""
        let currentNode = this.head
        let i = 0

        while(i<this.length){
            if(i === this.length-1){
                linkedList = linkedList +  currentNode.value    
            }else {
                linkedList = linkedList +  currentNode.value  + " --> "
            }
            currentNode = currentNode.next
            i++
        }
        console.log(linkedList)
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(2, 99)
myLinkedList.printList()
myLinkedList.reverse().printList()

// console.log(myLinkedList)
// myLinkedList.remove(1)
// myLinkedList.printList()
