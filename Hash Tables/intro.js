let user = {
    age: 25,
    name: "Harkiran",
    magic: true,
    scream: function(){
        console.log("Ahhhhhhh!")
    }
}

console.log(user.age) // O(1)
user.scream //O(1)
user.spell = "Abrakadabra"
user.name = "Shay"

console.log(user)

const a = new Map() // Map is like object but with a difference that it maintains orders of keys
const b = new Set() // Set just stores unique keys 