let multiplyStrings = function(num1, num2){
    let number1 = 0
    let number2 = 0

    // for (let i = num1.length-1 ; i>=0; i--){
    //     number1 = number1 + Math.pow(10,(num1.length-1-i))*(num1.charCodeAt(i) - 48)
    // }

    // for (let i = 0; i<num2.length; i++){
    //     number2 = number2 + Math.pow(10,(num2.length-1-i))*(num2.charCodeAt(i) - 48)
    // }

    
    // let smallNumber = number1 >= number2 ? num2 : num1
    // let largeNumber = number1 >= number2 ? number1 : number2
    // let result = 0

    // for (let i = 0; i < smallNumber.length; i++){
    //     result = result + largeNumber * smallNumber[i]*Math.pow(10, smallNumber.length-1)
    // }

    return (number1*number2).toString()
}

console.log(multiplyStrings("123456789","987654321"))