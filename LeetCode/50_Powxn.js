let myPow = function(x, n){

    if(n ===0) return 1

    let isPowNeg = false
    if (n < 0){
        n = Math.abs(n)
        isPowNeg = true
    }

    let currPower = 1
    let result = x

    while(currPower < n){
        if (currPower*2 < n){
            result = result * result
            currPower = 2 * currPower 
        } else {
            break
        }
    }

    for (let i = 0; i < n-currPower; i++){
        result = result * x
    }

    if(isPowNeg){
        return 1/result
    }

    return result

}

console.log(myPow(2.10000,3))