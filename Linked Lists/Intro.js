const basket = ["Apples", "Grapes", "Pears"]

let obj1 = {a: "Apples"}
let obj2 = obj1

// Here Obj2 is what programmers call a "pointer"
 

obj1.a = "Foo"
delete obj1
obj2 = "Hello"
console.log(obj1)
console.log(obj2)

// If Object 1 is deleted and object 2 is not anymore referenced to object 1 then the original value of object 1 get deleted
// automatically and this is called Garbage Collection in Computer Science