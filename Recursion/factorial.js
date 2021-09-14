function findFactorialRecursive (number){
    // Base case
    if (number === 0){
        return 1
    }
    // Recursive case
    return number * findFactorialRecursive(number-1)
}

// console.log(findFactorialRecursive(2))


function findFactorialIterative(number){
    if (number === 0){
        return 1
    }
    let result = 1
    
    while(number>0){
        result = result * number
        number--
    }
    return result
}

console.log(findFactorialIterative(5))