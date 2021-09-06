class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        console.log(this.first)
    }

    enqueue(value){
        const newNode  = new Node(value)
        if (this.length === 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
    }

    dequeue(){
        if (this.length === 0){
            console.log("Queue is empty")
        } else if (this.last === this.first){
            this.last = null
        }

        this.first = this.first.next
        this.length--
    }

}

const myQueue = new Queue()
myQueue.enqueue("Google")
myQueue.enqueue("Udemy")
myQueue.enqueue("Yahoo")

myQueue.dequeue()
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)