let climbStairs = function(n){
    let factorialMap = {0:1}
    let factorial = 1

    for (let i = 1; i <= n; i++){
        factorial = factorial * i
        factorialMap[i] = factorial
    }
    
    let noOFWays = 0
    let minSteps = Math.floor(n/2) + n%2
    let maxSteps = n
    let noOfTwoSteps = Math.floor(n/2)
    let noOfOneStep = n%2

    function permutations(noOfTwoSteps, noOfOneStep){
        let combinations  = 0
        combinations = factorialMap[(noOfOneStep + noOfTwoSteps)] / (factorialMap[noOfTwoSteps] * factorialMap[noOfOneStep])
        return combinations
    }

    for (let i = minSteps; i <= maxSteps; i++){
        noOFWays = noOFWays + permutations(noOfTwoSteps, noOfOneStep)
        noOfTwoSteps = noOfTwoSteps - 1
        noOfOneStep = noOfOneStep + 2
    }

    return noOFWays
}


console.log(climbStairs(7))