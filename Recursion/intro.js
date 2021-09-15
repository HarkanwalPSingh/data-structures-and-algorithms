let counter = 0

function inception(){
    if(counter>3){
        return "done!"
    }
    counter++
    return inception()
}

// console.log(inception())


// 1. Identify the base case.
// 2. Identify the recursive case.
// 3. Get closer and closer and return when needed. Usually we have two returns

let reverseString = function(s){
    
    if (s.length === 1){
        return s[0]
    }

    return s[s.length-1] + reverseString(s.slice(0, s.length-1))
}
    

console.log(reverseString("hello world"))