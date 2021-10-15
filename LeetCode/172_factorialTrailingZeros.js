let trailingZeros = function(n){
    let count = 0
    let i = 0

    while(true){
        if (n/Math.pow(5,i) === 0){
            break
        }else {
            count = Math.floor(n/Math.pow(5,i))
        }
        i++
    }
    return count

}