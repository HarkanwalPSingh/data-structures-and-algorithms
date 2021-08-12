// Solution 1

var addStrings1 = function(num1, num2){

    var maxLength = Math.max(num1.length, num2.length)
    var diffInLength = Math.abs(num1.length - num2.length)
    var prefix = ""
    var output = ""
    var carryIn = 0
    var asciiSum = 0
    
    // Loop to evaluate prefix so that the lengths of both inputs could equal each other.
    for (i=0; i < diffInLength; i++){
            prefix = prefix + "0"
    }

    // if else condition to equal the lengths of both inputs
    if (num1.length < num2.length){
        num1 = prefix + num1
    }else if (num1.length > num2.length){
        num2 = prefix + num2
    }


    // Loop to evaluate the final sum
    for (i = maxLength-1; i >= 0; i--){
        
        asciiSum = num1.charCodeAt(i) + num2.charCodeAt(i) - 48*2 + carryIn // 48 is the ascii code of 0

        if (asciiSum > 9){
            carryIn = 1
            if (i === 0){
                output =  "1" + asciiSum.toString()[1] + output // Handling different output if we are evaluating the most significant digit 
            }else {
                output = asciiSum.toString()[1] + output
            }
            
        }else{
            carryIn = 0
            output = asciiSum.toString()[0] + output 
        }

    }

    return output

}

var output1 = addStrings1("1", "1009")
console.log(output1)