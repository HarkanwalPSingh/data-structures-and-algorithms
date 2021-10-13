let isPowerOfThree = function(n){

    // while(n > 1 || n < -1){
    //     console.log(n)
    //     n = n/3
    // }

    // if (n === 1 || n === -1){
    //     return true
    // } else {
    //     return false
    // }

    let power = Math.log(n)/Math.log(3)
    console.log(power)

    let accuracy = Math.abs(power - Math.round(power)) / Math.round(power)
    console.log(accuracy)

    if (accuracy < 0.0000000000001) return true
    else return false
   
}

console.log(isPowerOfThree(27))