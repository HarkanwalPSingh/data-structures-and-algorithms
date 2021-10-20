let countPrimes = function(n){

    function isPrime(x){
        let divisor = 0

        for (let i = 2; i <= Math.floor(x/2) + 1; i++){
            divisor = x/i
            if (Number.isInteger(divisor)){
                return false
            }
        }
        return true
    } 

    let count = 0

    for(let i = 2; i<n; i++){
        if (i === 2) count ++

        if (i%2 === 1){
            if(isPrime(i)){
                count++
            }
        }
    }

    return count
}

console.log(countPrimes(14))