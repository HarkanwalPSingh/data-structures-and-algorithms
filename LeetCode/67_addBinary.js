// let addBinary = function(a,b){
    
//     function stringToNum(s){
//         let num = 0
//         for (let i = 0; i < s.length; i++){
//             num = Math.pow(2,s.length - 1 - i) * Number(s[i]) + num
//         }
//         return num
//     }

//     function numtoBinary(num){
//         let binary = ""
//         while(num!==0){
//             binary = String(num%2) + binary 
//             num = Math.floor(num/2)
//         }
//         return binary
//     }
//     let sum = stringToNum(a) + stringToNum(b)
//     return numtoBinary(sum)
    
// }

// function stringToNum(s){
//     let num = 0
//     for (let i = 0; i < s.length; i++){
//         num = Math.pow(2,s.length - 1 - i) * Number(s[i]) + num
//     }
//     return num
// }

// let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"

// let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

// console.log("a" + stringToNum(a))
// console.log("b" + stringToNum(b))

// console.log(addBinary(a, b))

let addBinary = function(a, b){
    let diffInLength = Math.abs(a.length - b.length)
    let prefix = ""
    for (let i = 0; i <diffInLength; i++){
        prefix = prefix + "0"
    }
    
    if (a.length < b.length){
        a = prefix + a
    } else if (a.length > b.length){
        b = prefix + b
    }
    let output = ""
    let i = a.length-1
    let carryIn = "0"

    while(i >= 0){
        
        if (a[i] + b[i] === "11"){
            if(carryIn === "1"){
                output = "1" + output
                carryIn = "1" 
             } else {
                 output = "0" + output
                 carryIn = "1"
             }
        } else if (a[i] + b[i] === "01" || a[i] + b[i] === "10"){
    
            if(carryIn === "1"){
               output = "0" + output
               carryIn = "1" 
            } else {
                output = "1" + output
                carryIn = "0"
            }
            
        } else if(a[i] + b[i] === "00"){
            if(carryIn === "1"){
                output = "1" + output
                carryIn = "0" 
             } else {
                 output = "0" + output
             }
        }
        i--

    }


    if (carryIn === "1"){
        return "1" + output
    }else {
        return output
    }
    
}

// console.log(addBinary("1010", "1011"))

let addBinary2 = function(a,b){
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2)
}

console.log(addBinary2("1011", "1010"))