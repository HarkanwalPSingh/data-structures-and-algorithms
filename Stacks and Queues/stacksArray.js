class Stack {
    constructor(){
        this.array = []
    }

    peek(){
        return this.array[this.array.length-1]
    }

    push(value){
        this.array.push(value)
    }

    pop(){
    this.array.pop()
    }

}

const myStack = new Stack()
myStack.push("Google")
myStack.push("Udemy")
myStack.push("Yahoo")
console.log(myStack.peek())
console.log(myStack)