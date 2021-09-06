class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek(){
        console.log(this.top)
    }

    push(value){
        const newNode  = new Node(value)
        if (this.length === 0){
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
    }

    pop(){
        if (this.length === 0){
            console.log("Stack is empty")
        } else if (this.bottom === this.top){
            this.top = null
            this.length--
        } else { 
            this.top = this.top.next
            this.length--
        }
    }

}

const myStack = new Stack()
myStack.push("Google")
myStack.push("Udemy")
myStack.push("Yahoo")
myStack.pop()
console.log(myStack)