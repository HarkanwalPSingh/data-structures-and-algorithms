class Queue {
    constructor(){
        this.stackOne = []
        this.stackTwo = []
    }

    push(value){
        this.stackOne.push(value)
        this.fillStackTwo()
    }

    fillStackTwo(){
        this.stackTwo = []
        for (let i = this.stackOne.length-1; i >= 0 ; i--){
            this.stackTwo.push(this.stackOne[i])
        }
    }

    updateStackOne(){
        this.stackOne = []
        for (let i = this.stackTwo.length-1; i >= 0 ; i--){
            this.stackOne.push(this.stackTwo[i])
        }
    }

    peek(){
        return this.stackTwo[this.stackTwo.length-1]
    }

    pop(){
        const poppedValue = this.stackTwo[this.stackTwo.length-1]
        this.stackTwo.pop()
        this.updateStackOne()
        return poppedValue
    }

    empty(){
        if(this.stackOne.length === 0){
            return true
        }else {
            return false
        }
    }
}

const myQueue = new Queue()
myQueue.push(1)
myQueue.push(2)
myQueue.push(3)
console.log(myQueue)
console.log(myQueue.peek())
console.log(myQueue.pop())
console.log(myQueue)