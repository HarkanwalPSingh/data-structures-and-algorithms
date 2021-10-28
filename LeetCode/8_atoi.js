let myAtoi = function(s){
     
    let numbers = ""
    let isNeg = false
    let charCode = 0
    let hasSign = false

    for (let i = 0; i <s.length; i++){
        charCode = s[i].charCodeAt(0)

        if (charCode === 32){
            continue
        }

        if (charCode === 45){
            isNeg = true
            if (hasSign){
                return 0
            } 

            hasSign = true
        }
        
        if (charCode === 43){
            if (hasSign) return 0
            hasSign = true

            continue
        }



        
        if (charCode >=97 && charCode <=122 || charCode === 43){
            if (numbers.length === 0){
                return 0
            } else {
                continue
            }
        }

        if(charCode === 46){
            if(numbers.length ===0){
                return 0
            }else {

                break
            }

        }

        if (charCode >= 48 && charCode <= 57){
            numbers += s[i]
        }

    }
    
    if (numbers.length === 0) return 0

    let number = isNeg ? -1 * parseInt(numbers, 10) : parseInt(numbers, 10)

    if (number < -2147483648) return  -2147483648
    else if (number > 2147483647) return  2147483647

    return number
}

console.log(myAtoi("+-12"))