// Reference type

let object1 = {value: 10}
let object2 = object1
let object3 = {value: 10}

console.log(object1 === object2)
console.log(object1 === object3)

// Context vs Scope

const object4 = {
    a: function(){
        console.log(this)
    }
}

object4.a()
console.log(this)

// Instantiation
class Player {
    constructor(name, type){
        console.log("Player", this)
        this.name = name
        this.type = type
    }

    introduce(){
        console.log("Hi I am " + this.name +  ", I am a " + this.type)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type)
        console.log("Wizard", this)
    }
    play(){
        console.log("Weeeee Im a" + this.type)
    }
}

let wizard1 = new Wizard("Shelly", "Healer")
let wizard2 = new Wizard("Shawn", "Dark Magic")


let player1 = new Player("Lionel Messi", "Footballer")

// wizard1.play()
// wizard1.introduce()