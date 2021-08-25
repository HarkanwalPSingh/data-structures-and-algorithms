class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0
        for (let i = 0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value){
        let index = this._hash(key)
        if(!this.data[index]){
            this.data[index] = []
        }
        this.data[index].push([key, value])
    }

    get(key){
        let index = this._hash(key)
        const currentBucket = this.data[index]
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }

        }
        return undefined
    }

    keys(){
        const keysArray = []

        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

}

const myHashTable = new HashTable(50)
myHashTable.set("grapes", 10000)
myHashTable.set("apples", 2)
myHashTable.set("oranges", 2)
console.log(myHashTable)
let value = myHashTable.get("grapes") // If there are no collisions then it is O(1) and if there is then it is O(n)
// console.log(value)
console.log(myHashTable.keys())

