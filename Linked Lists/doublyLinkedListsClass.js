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
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
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
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
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
                newNode.prev = currentNode
                currentNode.next.prev = newNode
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
            this.head.prev = null
            this.length--
        }else if (index >= this.length){
            this.remove(this.length-1)
        } else {
        while(i <= index){
            if (i === this.length - 2){
                currentNode.next = null
                this.tail = currentNode
                break
            }

            if (i === index -1){
                currentNode.next.next.prev = currentNode
                currentNode.next = currentNode.next.next
                break
            }
            currentNode = currentNode.next
            i++
        }
        this.length--
    }
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

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 99)
myLinkedList.remove(10)
myLinkedList.remove(10)
console.log(myLinkedList)
myLinkedList.printList()


