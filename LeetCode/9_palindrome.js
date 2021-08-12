// Solution 1 : By using in built function to convert to string

var isPalindrome1 = function(x){
    var numberString = String(x)
    
    if (x < 0){
        return false
    }else if (x === 0){
        return true
    }

    for (i = 0 ; i < Math.floor(numberString.length/2); i++){
        console.log(numberString[i], numberString[numberString.length-1-i])
        if (numberString[i] !== numberString[numberString.length-1-i]){
            return false
        }
    }
    return true

}

// console.log(isPalindrome1(1010101))

// Solution 2: Not an optimised solution. Same as solution 1 with a difference that number isn't converted to a stirng
var isPalindrome2 = function(x){

    if (x < 0){
        return false
    }else if (x === 0){
        return true
    }

    var noOfDigits = Math.floor(Math.log10(x)) + 1

    for ( i = 1; i < Math.floor(noOfDigits/2) + 1 ; i++){

        console.log(Math.floor(x/Math.pow(10,noOfDigits-i))%Math.pow(10,1), Math.floor((x%Math.pow(10,i))/Math.pow(10,i-1)))

        if( Math.floor(x/Math.pow(10,noOfDigits-i))%Math.pow(10,1) !== Math.floor((x%Math.pow(10,i))/Math.pow(10,i-1))  ){
            return false
        }
        
    }
    return true

}

// console.log(isPalindrome2(78987))

// Solution 3: Reversing a number and then comparing it.

var isPalindrome3 = function(x){

    if (x < 0){
        return false
    }else if (x === 0){
        return true
    }

    var rev = 0
    var num = x

    while(num !==0){
        rev = rev*10 + num%10
        num = Math.floor(num/10)
    }

    if (rev === x){
        return true
    }else {
        return false
    }

}

console.log(isPalindrome3(78987))