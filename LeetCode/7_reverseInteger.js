let reverseInteger = function(x){
    sign = "+"
    if (x < 0){
        sign = "-"
        x = Math.abs(x)
    } 

    x = x.toString(10)
    x = sign === "-" ? sign +  x.split("").reverse().join("") : x.split("").reverse().join("")
    


    x = parseInt(x, 10)

    if(Math.abs(x) > 2147483647) return 0

    return x    
}

let reverseInteger = function(x){
    negSign = false 
    if (x < 0){
        negSign = true
        x = Math.abs(x)
    } 

    let res = 0
    let rem = 0

    while(num !== 0){
        rem = x%10
        res = res*10 + rem
        num = Math.floor(x/10)
    }

    if (negSign) return -1*x

    return res
    


    x = parseInt(x, 10)

    if(Math.abs(x) > 2147483647) return 0

    return x    
}

console.log(reverseInteger(123))