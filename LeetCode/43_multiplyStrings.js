// let multiplyStrings = function(num1, num2){
//     let numLarge = 0
    
//     let smallNumber = num1.length >= num2.length ? num2 : num1
//     let largeNumber = smallNumber === num2 ? num1 : num2
//     let result = 0

//     for (let i = largeNumber.length-1 ; i>=0; i--){
//         numLarge = numLarge + Math.pow(10,(largeNumber.length-1-i))*(largeNumber.charCodeAt(i) - 48)
//     }

//     for (let i = 0; i < smallNumber.length; i++){
//         result = result + Math.pow(10,(smallNumber.length-1-i))*(smallNumber.charCodeAt(i) - 48) * largeNumber
//     }

//     // for (let i = 0; i<num2.length; i++){
//     //     number2 = number2 + Math.pow(10,(num2.length-1-i))*(num2.charCodeAt(i) - 48)
//     // }

    

//     // for (let i = 0; i < smallNumber.length; i++){
//     //     result = result + largeNumber * smallNumber[i]*Math.pow(10, smallNumber.length-1)
//     // }

//     return (result).toString()
    
// }


let multiplyStrings = function(num1, num2){
    let length1 = num1.length
    let length2 = num2.length
    let number1 = 0
    let number2 = 0

    let result = new Array(length1 + length2).fill(0)
    let carry = 0

    num1 = num1.split("").reverse()
    num2 = num2.split("").reverse()

    if(num1 === "0" || num2 === "0"){
        return "0"
    }

    for (let i = 0; i < length1; i++){
        carry = 0
        for(let j = 0; j < length2; j++){
            number1 = num1[i].charCodeAt(0) - 48
            number2 = num2[j].charCodeAt(0) - 48
        
 
        result[i+j]  = result[i+j] + number1 * number2 + carry

        if (result[i + j] > 9){
                carry = Math.floor(result[i + j]/10)
                result[i + j] = result[i + j] % 10
            
        } else {
            carry = 0
        }
        if(j === length2-1 &&  carry > 0){
            result[i+j+1]  = result[i+j+1] + carry
        }
    }
    }
    result = result.reverse().join("")
    if (result[0] === "0"){
        result = result.slice(1)
    }
    return result         
}

console.log(multiplyStrings("9","0"))